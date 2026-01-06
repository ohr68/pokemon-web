import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { signIn } from '@/api/sign-in.ts'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Seo } from '@/components/seo.tsx'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn () {
  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  })

  async function handleSignIn (data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success(`We've sent an auth link to ${data.email}.`, {
        action: {
          label: 'Resend',
          onClick: () => {
          }
        }
      })
    } catch (error) {
      toast.error('Invalid Credentials.')
    }
  }

  return (
    <div>
      <Seo
        title='Login'
        description='SignIn to see all the app resources'
        name='pokemon.app'
        type='manager'
      />
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/auth/sign-up'>
            New user
          </Link>
        </Button>
        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Access panel</h1>
            <p className='text-sm text-muted-foreground'>
              Check on your Pokedex!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>E-mail</Label>
              <Input type='email' id='email' {...register('email')} />
            </div>
            <Button type='submit' className='w-full' disabled={isSubmitting}>
              Access Pokedex
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
