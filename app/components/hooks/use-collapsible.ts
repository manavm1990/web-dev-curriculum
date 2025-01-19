import { useState } from 'react'

export default function useCollapsible() {
  const [openCollapsible, setOpenCollapsible] = useState(false)

  return [openCollapsible, setOpenCollapsible] as const
}
