import { motion } from 'motion/react'

export interface PokemonImageProps {
  imageUrl: string
  pokemonName: string
}

export function PokemonImage ({ imageUrl, pokemonName }: PokemonImageProps) {
  return (
    <motion.img
      src={imageUrl}
      alt={pokemonName}
      className='h-5/6 w-5/6 object-contain drop-shadow-lg'
      variants={{
        idle: {
          scale: 1
        },
        hovering: {
          scale: 1.12
        }
      }}
      transition={{ duration: 0.25 }}
    />
  )
}
