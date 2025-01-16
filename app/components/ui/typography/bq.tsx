import { ExternalLink } from 'lucide-react'
import type TypographyProps from './typography.types'

interface BqProps extends TypographyProps {
  author?: string
  authorUrl?: string
  quote: string
}

export default function Bq({ quote, author, authorUrl }: BqProps) {
  return (
    <blockquote className="mt-6 border-l-2 border-primary pl-6">
      <p>{quote}</p>
      {author && (
        <footer>
          &mdash;&nbsp;
          {authorUrl ? (
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {author}
              <ExternalLink className="ml-px inline-block size-3 -translate-y-1" />
            </a>
          ) : (
            author
          )}
        </footer>
      )}
    </blockquote>
  )
}
