import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { camelCase, cn, getFormattedNumber } from '@/lib/utils.ts'
import { PokemonTypeBadge } from '@/components/pokemon/pokemon-type-badge.tsx'
import type { TypeSlot } from '@/@types/type-slote.ts'
import { AnimatedBorder } from '@/components/animated-border.tsx'
import { PokemonImage } from '@/components/pokemon/pokemon-image.tsx'
import { NavLink } from 'react-router-dom'
import { handleBackgroundColorByType } from '@/lib/pokemon-utils.ts'

export interface PokemonCardProps {
  id: number
  name: string
  imageUrl: string
  types: Array<TypeSlot>
}

export function PokemonCard ({ id, name, imageUrl, types }: PokemonCardProps) {
  return (
    <AnimatedBorder>
      <NavLink to={`/details/${name}`}>
        <Card key={id} className='border-0 rounded-lg bg-base cursor-pointer overflow-hidden'>
          <CardHeader className='flex flex-col justify-between space-y-0 pb-2'>
            <div className='flex flex-row items-center justify-between w-full'>
              <CardTitle className='text-base font-semibold'>
                {camelCase(name)}
              </CardTitle>
              <span className='text-base font-semibold'>{getFormattedNumber(id)}</span>
            </div>
            <CardDescription>
              {types.map((type) => (
                <PokemonTypeBadge key={type.slot} type={type.type.name} />
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={cn('relative flex justify-center items-center bg-gradient-to-b border-0 rounded-md',
              handleBackgroundColorByType(types[0]?.type.name ?? 'no type'))}
          >
            <PokemonImage imageUrl={imageUrl} pokemonName={name} />
          </CardContent>
        </Card>
      </NavLink>
    </AnimatedBorder>
  )
}
