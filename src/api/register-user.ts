import { api } from '@/lib/axios.ts'

export interface RegisterUserBody {
  email: string
}

export async function registerUser ({
  email
}: RegisterUserBody) {
  await api.post('/users', {
    email
  })
}
