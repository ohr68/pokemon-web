import type { Pokemon } from '@/@types/pokemon.ts'
import { api } from '@/lib/axios.ts'

export interface FetchPokemonByName {
  name: string
}

export async function fetchPokemonByName ({ name }: FetchPokemonByName): Promise<Pokemon> {
  const response = await api.get<Pokemon>(`pokemon/${name}`)

  return response.data
}
