import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import z from 'zod'
import { Seo } from '@/components/seo'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '@/api/register-user.ts'

const signUpForm = z.object({
  email: z.email()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp () {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm)
  })

  const { mutateAsync: registerUserFn } = useMutation({
    mutationFn: registerUser
  })

  async function handleSignUp (data: SignUpForm) {
    try {
      await registerUserFn({
        email: data.email,
      })

      toast.success('User created successfully!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/auth/sign-in?email=${data.email}`)
        }
      })
    } catch {
      toast.error('Failed to register user.')
    }
  }

  return (
    <div>
      <Seo
        title='Sign Up'
        description='SignUn to start managing your Pokedex'
        name='pokemon.app'
        type='manager'
      />
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/auth/sign-in'>
            Fazer login
          </Link>
        </Button>
        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account for free
            </h1>
            <p className='text-sm text-muted-foreground'>
              Sign Up and start to follow up your Pokedex.
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input type='email' id='email' {...register('email')} />
            </div>
            <Button type='submit' className='w-full' disabled={isSubmitting}>
              Sign Up
            </Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              By continuing, you agree with our{' '}
              <a href='' className='underline underline-offset-4'>
                terms of service
              </a>{' '} and {' '}
              <a href='' className='underline underline-offset-4'>
                privacy policy.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
