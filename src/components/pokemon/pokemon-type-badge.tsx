import { Badge } from '@/components/ui/badge.tsx'
import { camelCase, cn } from '@/lib/utils.ts'
import { PokemonTypeIcon } from '@/components/pokemon/pokemon-type-icon.tsx'

export interface PokemonTypeBadgeProps {
  type?: string
}

export function PokemonTypeBadge ({ type }: PokemonTypeBadgeProps) {
  function handleBadgeColorByType (type?: string) {
    switch (type) {
      case 'fire':
        return 'bg-red-600'
      case 'grass':
        return 'bg-emerald-600'
      case 'water':
        return 'bg-blue-600'
      case 'electric':
        return 'bg-yellow-600'
      case 'ghost':
        return 'bg-violet-600'
      case 'fairy':
        return 'bg-pink-500'
      case 'poison':
        return 'bg-fuchsia-600'
      case 'ground':
        return 'bg-amber-700'
      case 'rock':
        return 'bg-gray-600'
      case 'psychic':
        return 'bg-indigo-600'
      case 'fighting':
        return 'bg-neutral-600'
      case 'bug':
        return 'bg-lime-600'
      case 'normal':
        return 'bg-slate-600'
      case 'flying':
        return 'bg-cyan-600'
      case 'ice':
        return 'bg-sky-400'
      case 'steel':
        return 'bg-slate-400'
      case 'dark':
        return 'bg-slate-900 border-slate-500'
      default:
        return 'bg-slate-800'
    }
  }

  return (
    <Badge
      variant='secondary'
      className={cn('text-white mr-2', handleBadgeColorByType(type ?? 'no type'))}
    >
      <PokemonTypeIcon type={type} />
      {camelCase(type ?? 'No type')}
    </Badge>
  )
}
