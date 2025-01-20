import Link from 'next/link'
import type HeadingProps from './headings.types'
import { createHeadingId } from './utils'

export default function H2({ className, children }: HeadingProps) {
  const id = createHeadingId(children)

  return (
    <Link
      href={`#${id}`}
      className={`my-4 inline-block scroll-m-20 text-3xl font-semibold tracking-tight underline underline-offset-4 first:mt-0 ${className ? className : ''}`}
    >
      <h2 id={id}>{children}</h2>
    </Link>
  )
}
