import { Separator } from '@radix-ui/react-separator'
import { Home, List } from 'lucide-react'
import { ModeToggle } from './theme/theme-toggle'
import { NavLink } from './nav-link'
import HeaderIcon from '@/assets/header-icon.svg'

export function Header () {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center gap-6 px-6'>
        <img src={HeaderIcon} alt='header logo' className='h-10 w-10' />

        <Separator orientation='vertical' className='h-6' />

        <nav className='flex items-center space-x-4 lg:space-x-6'>
          <NavLink to='/'>
            <Home className='h-4 w-4' />
            Início
          </NavLink>
          <NavLink to='/orders'>
            <List className='h-4 w-4' />
            Meus Pokémons
          </NavLink>
        </nav>

        <div className='ml-auto flex items-center gap-2'>
          <ModeToggle />
          {/* <AccountMenu /> */}
        </div>
      </div>
    </div>
  )
}
