import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import type React from 'react'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="inline-flex items-center gap-x-px"
    >
      {children}
      <ExternalLinkIcon className="size-2 -translate-y-px" />
    </a>
  )
}
