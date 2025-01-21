import type TypographyProps from './typography.types'

export default function Code({ children }: TypographyProps) {
  return (
    <code className={`relative my-4 inline-block rounded bg-muted font-mono text-sm font-semibold`}>
      {children}
    </code>
  )
}
