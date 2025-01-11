import type TypographyProps from './typography.types'

export default function H3({ className, children }: TypographyProps) {
  return (
    <h3
      className={`my-4 scroll-m-20 text-2xl font-semibold tracking-tight $${className ? className : ''}`}
    >
      {children}
    </h3>
  )
}
