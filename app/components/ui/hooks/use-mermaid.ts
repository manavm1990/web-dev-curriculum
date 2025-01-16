import mermaid from 'mermaid'
import { useEffect, useRef } from 'react'

mermaid.initialize({
  startOnLoad: true,
  theme: 'forest',
  themeVariables: {
    primaryColor: '#6366f1', // indigo-500
    primaryTextColor: '#f8fafc', // slate-50
    primaryBorderColor: '#4f46e5', // indigo-600
    lineColor: '#6366f1', // indigo-500
    secondaryColor: '#818cf8', // indigo-400
    tertiaryColor: '#c7d2fe', // indigo-200
  },
})

export default function useMermaid(chart: string) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current)
      mermaid.render('mermaid-svg', chart).then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg
      })
  }, [chart])

  return ref
}
