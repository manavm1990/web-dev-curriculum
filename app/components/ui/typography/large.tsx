import type TypographyProps from './typography.types'

export default function Large({ children, className }: TypographyProps) {
  return (
    <strong className={`my-1 text-lg font-semibold ${className ? className : ''}`}>
      {children}
    </strong>
  )
}
