import type TypographyProps from "./typography.types";

export default function Lead({ children, className }: TypographyProps) {
  return (
    <p className={`text-muted-foreground text-xl ${className}`}>{children}</p>
  );
}
