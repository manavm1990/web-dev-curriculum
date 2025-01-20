import Link from 'next/link'
import type HeadingProps from './headings.types'
import { createHeadingId } from './utils'

export default function H4({ children }: HeadingProps) {
  const id = createHeadingId(children)

  return (
    <Link
      href={`#${id}`}
      className="my-2 inline-block scroll-m-20 text-xl font-semibold tracking-tight underline underline-offset-2"
    >
      <h4 id={id}>{children}</h4>
    </Link>
  )
}
