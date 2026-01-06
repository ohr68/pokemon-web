import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Error } from './pages/error'
import { AuthLayout } from '@/pages/_layouts/auth.tsx'
import { SignIn } from '@/pages/auth/sign-in.tsx'
import { SignUp } from '@/pages/auth/sign-up.tsx'
import { Pokedex } from '@/pages/app/pokedex/pokedex.tsx'
import { PokemonDetails } from '@/pages/app/pokedex/pokemon-details.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Pokedex /> },
      { path: '/details/:name', element: <PokemonDetails /> },
      // { path: '/pokemons', element: <Pokemons /> }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> }
    ]
  }
])
