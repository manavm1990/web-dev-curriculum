import type TypographyProps from './typography.types'

export default function Large({ children, className }: TypographyProps) {
  return (
    <strong
      className={`my-6 inline-block gap-x-px text-lg font-semibold ${className ? className : ''}`}
    >
      <span className="inline-flex items-center space-x-2">
        <span>💡</span>
        <span>{children}</span>
      </span>
    </strong>
  )
}
