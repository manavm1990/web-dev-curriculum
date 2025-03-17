import { useState } from 'react'

export default function useCollapsible() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    setIsOpen,
  } as const
}
