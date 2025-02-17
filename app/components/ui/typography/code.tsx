import { type ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import type TypographyProps from './typography.types'

type CodeProps = TypographyProps &
  Omit<ComponentPropsWithoutRef<'code'>, 'children'> & {
    children: string
  }

export default function Code({ children, className, ...props }: CodeProps) {
  const isInlineCode = !className?.includes('language-')

  // For inline code snippets (no language specified)
  if (isInlineCode) {
    return (
      <code
        className={`bg-muted relative mx-1 rounded px-2 py-1 font-mono text-sm font-medium ${className || ''}`}
        {...props}
      >
        {children}
      </code>
    )
  }

  // For code blocks with syntax highlighting
  const highlightedCode = highlight(children)

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg bg-zinc-950">
      {/* Optional: Language indicator */}
      {className && (
        <div className="absolute top-3 right-4 z-20 text-xs text-zinc-500">
          {className.replace('language-', '')}
        </div>
      )}

      <code
        className={`relative block overflow-x-auto p-4 font-mono text-sm ${className || ''}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        {...props}
      />
    </div>
  )
}
