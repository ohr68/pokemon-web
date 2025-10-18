import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // { path: '/', element: <Dashboard /> },
      // { path: '/pokemons', element: <Pokemons /> }
    ]
  },
//   {
//     path: '/auth',
//     element: <AuthLayout />,
//     children: [
//       { path: 'sign-in', element: <SignIn /> },
//       { path: 'sign-up', element: <SignUp /> }
//     ]
//   }
])
