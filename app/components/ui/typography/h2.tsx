import type TypographyProps from "./typography.types";

export default function H2({ className, children }: TypographyProps) {
  return (
    <h2
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}
