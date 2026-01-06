import { api } from '@/lib/axios.ts'
import type { LinkDetails } from '@/@types/link-details.ts'
import type { Gender } from '@/@types/gender.ts'
import type { FlavorText } from '@/@types/flavor-text.ts'

export interface FetchSpeciesByNameParams {
  name: string
}

export interface FetchSpeciesResponse {
  id: number
  name: string
  baseHappiness: number
  color: LinkDetails
  eggGroups: Array<LinkDetails>
  evolutionChain: LinkDetails
  evolvesFromSpecies: any | null
  flavorTextEntries: Array<FlavorText>
  formDescriptions: Array<any>
  formsSwitchable: boolean
  genderRate: number
  genera: Array<Gender>
  habitat: LinkDetails
  hasGenderDifferences: boolean
  hatchCounter: number
  isBaby: boolean
  isLegendary: boolean
  isMythical: boolean
  names: Array<any>
  order: number
  palParkEncounters: Array<any>
  pokedexNumbers: Array<any>
  shape: LinkDetails
  varieties: Array<any>
}

export async function fetchPokemonSpecies ({ name }: FetchSpeciesByNameParams): Promise<FetchSpeciesResponse> {
  const response = await api.get<FetchSpeciesResponse>(`pokemon-species/${name}/`)

  return response.data
}
