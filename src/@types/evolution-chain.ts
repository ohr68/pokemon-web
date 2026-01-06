import type { EvolutionDetails } from '@/@types/evolution-details.ts'
import type { SpeciesInfo } from '@/@types/species-info.ts'

export interface EvolutionChain {
  evolutionDetails: Array<EvolutionDetails>
  evolvesTo: Array<EvolutionChain>
  isBaby: boolean
  species: SpeciesInfo
}
