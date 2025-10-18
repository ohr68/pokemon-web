import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import './styles/styles.css'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'

export function App () {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pokemon.app' />
      <ThemeProvider storageKey='pokemonapp-theme' defaultTheme='dark'>
        <Toaster richColors theme='system' />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
