import Link from 'next/link'
import type HeadingProps from './headings.types'
import { createHeadingId } from './utils'

export default function H3({ className, children }: HeadingProps) {
  const id = createHeadingId(children)

  return (
    <Link
      href={`#${id}`}
      className={`my-4 inline-block scroll-m-20 text-2xl font-semibold tracking-tight underline underline-offset-2 ${className ? className : ''}`}
    >
      <h3 id={id}>{children}</h3>
    </Link>
  )
}
