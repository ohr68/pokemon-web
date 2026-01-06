import { api } from '@/lib/axios.ts'
import type { EvolutionChain } from '@/@types/evolution-chain.ts'

export interface FetchEvolutionChainParams {
  endpoint: string
}

export interface FetchEvolutionChainResponse {
  id: number
  babyTriggerItem?: any
  chain: EvolutionChain
}

export async function fetchEvolutionChain ({ endpoint }: FetchEvolutionChainParams): Promise<FetchEvolutionChainResponse> {
  const response = await api.get<FetchEvolutionChainResponse>(endpoint)

  return response.data
}
