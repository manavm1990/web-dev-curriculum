import type TypographyProps from './typography.types'

export default function P({ children }: TypographyProps) {
  return <p className="leading-7 not-first:mt-6">{children}</p>
}
