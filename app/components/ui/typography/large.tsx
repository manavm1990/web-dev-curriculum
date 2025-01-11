import type TypographyProps from "./typography.types";

export default function Large({ children, className }: TypographyProps) {
  return <p className={`text-lg font-semibold ${className}`}>{children}</p>;
}
