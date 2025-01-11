import type TypographyProps from "./typography.types";

export default function H4({ children }: TypographyProps) {
  return (
    <h4 className="children-2xl scroll-m-20 font-semibold tracking-tight">
      {children}
    </h4>
  );
}
