import { Seo } from '@/components/seo.tsx'
import { PokemonCard } from '@/components/pokemon/pokemon-card.tsx'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { fetchPokemonById } from '@/api/fetch-pokemon-by-id.ts'
import { useEffect, useRef } from 'react'
import { PageLoading } from '@/components/page-loading.tsx'

const PAGE_SIZE = 100

export function Pokedex () {
  const [searchParams] = useSearchParams()
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const firstId = z.coerce.number().parse(searchParams.get('firstId') ?? '1')
  const lastId = searchParams.get('lastId')
    ? z.coerce.number().parse(searchParams.get('lastId'))
    : Infinity

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['pokemon', 'pokedex', firstId, lastId],
    initialPageParam: firstId,
    queryFn: async ({ pageParam }) => {
      const start = pageParam
      const end = Math.min(pageParam + PAGE_SIZE - 1, lastId)

      const ids = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      )

      const pokemons = await Promise.all(
        ids.map((id) => fetchPokemonById({ id }))
      )

      return {
        pokemons,
        nextId: end + 1
      }
    },
    getNextPageParam: (lastPage) =>
      lastPage.nextId <= lastId ? lastPage.nextId : undefined
  })

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <>
      <Seo
        title='Pokedex'
        description='All existing Pokemons'
        name='pokemon.app'
        type='user'
      />

      <div className='grid grid-cols-4 gap-4'>
        {data?.pages.flatMap(page =>
          page.pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              imageUrl={
                                pokemon.sprites.other.home.frontDefault ??
                                pokemon.sprites.other.officialArtwork?.frontDefault
                            }
              types={pokemon.types}
            />
          ))
        )}
      </div>

      {(isLoading || isFetchingNextPage) && (
        <PageLoading />
      )}

      <div ref={loadMoreRef} />
    </>
  )
}
