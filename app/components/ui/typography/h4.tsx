import type TypographyProps from './typography.types'

export default function H4({ children }: TypographyProps) {
  return <h4 className="my-2 scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
}
