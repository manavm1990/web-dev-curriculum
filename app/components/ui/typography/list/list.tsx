import type TypographyProps from '../typography.types'

export default function List({ children }: TypographyProps) {
  return <ul className="list-alternating-dots my-6 ml-6">{children}</ul>
}
