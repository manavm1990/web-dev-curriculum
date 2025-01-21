import { useState } from 'react'

export default function useCollapsible() {
  const [isOpen, setIsOpen] = useState(true)

  return {
    isOpen,
    setIsOpen,
  } as const
}
