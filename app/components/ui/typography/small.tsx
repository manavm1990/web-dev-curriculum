import type TypographyProps from "./typography.types";

export default function Small({ children }: TypographyProps) {
  return <small className="text-sm font-light leading-tight">{children}</small>;
}
