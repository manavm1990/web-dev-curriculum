import type TypographyProps from './typography.types'

export default function Lead({ children, className }: TypographyProps) {
  return (
    <span className={`text-xl text-muted-foreground ${className ? className : ''}`}>
      {children}
    </span>
  )
}
