import type TypographyProps from './typography.types'

export default function H2({ className, children }: TypographyProps) {
  return (
    <h2
      className={`my-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className ? className : ''}`}
    >
      {children}
    </h2>
  )
}
