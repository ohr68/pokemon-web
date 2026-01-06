import { Spinner } from '@/components/ui/spinner.tsx'

export function PageLoading () {
  return (
    <div className='flex w-full h-full py-4'>
      <div className='flex flex-row w-full items-center justify-center gap-4'>
        <Spinner className='size-6' />
        <span className='font-semibold text-lg'>
          Loading...
        </span>
      </div>
    </div>
  )
}
