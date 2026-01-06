import type { LinkDetails } from '@/@types/link-details.ts'

export interface EvolutionDetails {
  gender?: string
  heldItem?: any
  item?: any
  knownMove?: any
  knownMoveType?: any
  location?: string
  minAffection?: string
  minBeauty?: string
  minHappiness?: string
  minLevel: number
  needsOverworldRain: boolean
  partySpecies?: any
  partyType?: any
  relativePhysicalStats?: any
  timeOfDay: string
  tradeSpecies?: any
  trigger: LinkDetails
  turnUpsideDown: boolean
}
