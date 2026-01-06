import {
  AnvilIcon,
  BrainIcon,
  BugIcon,
  CircleSlashIcon,
  DropletIcon,
  FlameIcon,
  GhostIcon, HandFistIcon,
  LeafIcon, MoonIcon,
  MountainIcon, ShellIcon,
  SkullIcon, SnowflakeIcon, SparklesIcon, StoneIcon,
  WindIcon, ZapIcon
} from 'lucide-react'
import type { JSX } from 'react'

export interface PokemonTypeIconProps {
  type?: string
}

const typeIconMap: Record<string, JSX.Element> = {
  grass: <LeafIcon className='h-4 w-4' />,
  fire: <FlameIcon className='h-4 w-4' />,
  water: <DropletIcon className='h-4 w-4' />,
  poison: <SkullIcon className='h-4 w-4' />,
  ghost: <GhostIcon className='h-4 w-4' />,
  flying: <WindIcon className='h-4 w-4' />,
  bug: <BugIcon className='h-4 w-4' />,
  normal: <CircleSlashIcon className='h-4 w-4' />,
  rock: <StoneIcon className='h-4 w-4' />,
  ground: <MountainIcon className='h-4 w-4' />,
  fighting: <HandFistIcon className='h-4 w-4' />,
  psychic: <BrainIcon className='h-4 w-4' />,
  fairy: <SparklesIcon className='h-4 w-4' />,
  electric: <ZapIcon className='h-4 w-4' />,
  steel: <AnvilIcon className='h-4 w-4' />,
  ice: <SnowflakeIcon className='h-4 w-4' />,
  dragon: <ShellIcon className='h-4 w-4' />,
  dark: <MoonIcon className='h-4 w-4' />
}

export function PokemonTypeIcon ({ type }: PokemonTypeIconProps) {
  if (!type) return null

  return typeIconMap[type] ?? null
}
