import type { Sprite } from '@/@types/sprites.ts'
import type { TypeSlot } from '@/@types/type-slote.ts'

export interface Pokemon {
  id: number
  name: string
  order: number
  weight: number
  abilities: Array<any>
  baseExperience: number
  forms: Array<any>
  gameIndices: Array<any>
  height: number
  heldItems: Array<any>
  isDefault: boolean
  locationAreaEncounters: string
  moves: Array<any>
  pastTypes: Array<any>
  species: Array<any>
  sprites: Sprite
  stats: Array<any>
  types: Array<TypeSlot>
}
