import { Seo } from '@/components/seo.tsx'
import { NavLink, useParams } from 'react-router-dom'
import { camelCase, cn } from '@/lib/utils.ts'
import { ArrowLeftIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '@/api/fetch-pokemon-by-name.ts'
import { PageLoading } from '@/components/page-loading.tsx'
import { handleBackgroundColorByType } from '@/lib/pokemon-utils.ts'
import { Separator } from '@/components/ui/separator.tsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function PokemonDetails () {
  const { name } = useParams<{ name: string }>()

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName({ name: name! }),
    enabled: !!name
  })

  return (
    <>
      <Seo
        title={camelCase(name ?? 'Pokemon Details')}
        description='Shows all details related with to the selected Pokemon'
        name='pokemon.app'
        type='user'
      />
      <div className='flex w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden'>
        <div className='flex w-full items-center'>
          <NavLink to='/'>
            <ArrowLeftIcon />
          </NavLink>
          <div className='flex w-full justify-center'>
            <span className='font-semibold text-2xl'>{camelCase(pokemon?.name ?? 'Pokemon name')}</span>
          </div>
        </div>
        <div className='flex w-full p-4'>
          <div
            className={cn('flex w-full max-h-[40rem] justify-center items-center bg-gradient-to-b border-0 rounded-md',
              handleBackgroundColorByType(pokemon?.types[0]?.type.name ?? 'no type'))}
          >
            <img
              src={pokemon?.sprites.other.home.frontDefault ?? pokemon?.sprites.other.officialArtwork?.frontDefault}
              className='h-3/4 w-5/6 object-contain drop-shadow-lg'
              alt={pokemon?.name}
            />
          </div>
        </div>

        <Separator className='my-4' />
        <div className='flex w-full'>
          <Accordion
            type='single'
            collapsible
            className='w-full'
            defaultValue='item-1'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express shipping
                  ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your
                  shipment in real-time through our dedicated tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  We stand behind our products with a comprehensive 30-day return
                  policy. If you&apos;re not completely satisfied, simply return the
                  item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and
                  full refunds processed within 48 hours of receiving the returned
                  item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {(isLoading) && (
        <PageLoading />
      )}
    </>
  )
}
