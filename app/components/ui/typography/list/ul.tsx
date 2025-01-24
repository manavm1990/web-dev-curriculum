import type TypographyProps from '../typography.types'
import { cn } from '@/lib/utils'

export default function List({ children, className }: TypographyProps) {
  return <ul className={cn('my-4 list-inside list-disc space-y-2', className)}>{children}</ul>
}
