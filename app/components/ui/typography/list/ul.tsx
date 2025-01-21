import type TypographyProps from '../typography.types'

export default function List({ children }: TypographyProps) {
  return <ul className="my-4 list-inside list-disc space-y-2">{children}</ul>
}
