import type TypographyProps from './typography.types'

export default function H1({ className, children }: TypographyProps) {
  return (
    <h1
      className={`my-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className ? className : ''}`}
    >
      {children}
    </h1>
  )
}
