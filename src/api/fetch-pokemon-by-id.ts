import type { Pokemon } from '@/@types/pokemon.ts'
import { api } from '@/lib/axios.ts'

export interface FetchPokemonById {
  id: number
}

export async function fetchPokemonById ({ id }: FetchPokemonById): Promise<Pokemon> {
  const response = await api.get<Pokemon>(`pokemon/${id}`)

  return response.data
}
