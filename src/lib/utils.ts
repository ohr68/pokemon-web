import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pad (num: number, size: number): string {
  let s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export function getFormattedNumber (num: number | null): string {
  if (!num) {
    return ''
  }

  return `Nº ${pad(num, 3)}`
}

export function camelCase (str: string): string {
  const result = str.replace(/([A-Z])/g, ' $1')

  return result.charAt(0).toUpperCase() + result.slice(1)
}
