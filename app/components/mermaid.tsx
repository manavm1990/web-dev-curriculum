'use client'

import useMermaid from './hooks/use-mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const mermaidRef = useMermaid(chart)

  return <div ref={mermaidRef} className="my-8 flex justify-center" />
}
