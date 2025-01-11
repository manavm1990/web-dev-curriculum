import type TypographyProps from "./typography.types";

export default function H3({ className, children }: TypographyProps) {
  return (
    <h3
      className={`scroll-m-20 border-b border-primary pb-2 font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h3>
  );
}
