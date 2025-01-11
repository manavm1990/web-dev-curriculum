import type TypographyProps from './typography.types'

export default function Code({ children }: TypographyProps) {
  return (
    <code
      className={`bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`}
    >
      {children}
    </code>
  )
}
