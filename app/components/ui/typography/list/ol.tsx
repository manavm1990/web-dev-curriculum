import type TypographyProps from '../typography.types'

export default function Ol({ children }: TypographyProps) {
  return <ol className="my-4 list-inside list-decimal space-y-2">{children}</ol>
}
