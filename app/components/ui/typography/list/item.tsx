import type TypographyProps from '../typography.types'

export default function ListItem({ children }: TypographyProps) {
  return <li className="mt-2">{children}</li>
}
