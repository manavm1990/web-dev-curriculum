import { Link } from 'next-view-transitions'
import type HeadingProps from './headings.types'
import { createHeadingId } from './utils'

export default function H4({ children, className }: HeadingProps) {
  const id = createHeadingId(children)

  return (
    <Link
      href={`#${id}`}
      className={`my-2 inline-block scroll-m-20 text-xl font-semibold tracking-tight underline underline-offset-2 ${className ? className : ''}`}
    >
      <h4 id={id}>{children}</h4>
    </Link>
  )
}
