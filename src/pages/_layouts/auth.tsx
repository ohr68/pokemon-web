import { Outlet } from 'react-router-dom'
import HeaderIcon from '../../../public/favicon.png'

export function AuthLayout () {
  return (
    <div className='min-h-screen grid grid-cols-2 antialiased'>
      <div
        className='h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between'
      >
        <div className='flex items-center gap-3 text-lg text-foreground'>
          <img src={HeaderIcon} alt='header logo' className='h-10 w-10' />
          <span className='font-semibold'>pokemon.app</span>
        </div>
        <footer className='text-sm'>
          Pokedex panel &copy; pokemon.app - {new Date().getFullYear()}
        </footer>
      </div>

      <div className='relative flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
