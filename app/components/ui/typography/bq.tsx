import type TypographyProps from "./typography.types";

export default function Bq({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 border-primary pl-6 italic">
      {children}
    </blockquote>
  );
}
