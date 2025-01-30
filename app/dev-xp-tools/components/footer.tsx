import { Separator } from '@/components/ui/separator'
import Small from '@/components/ui/typography/small'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-4">
      <Separator />

      <Small>
        Crafted with Care by:{' '}
        <a href="https://github.com/manavm1990" target="_blank" rel="noopener noreferrer">
          CodeFinity
        </a>
      </Small>

      <Small>
        <a
          href="https://github.com/manavm1990/web-dev-curriculum/blob/main/LICENSE.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>
      </Small>

      <Small>
        <a
          href="https://github.com/manavm1990/web-dev-curriculum"
          className="inline-flex items-center gap-x-2"
        >
          View Source&nbsp;
          {/* eslint-disable-next-line @next/next/no-img-element -- It's a 🤬 icon. */}
          <img height="16" width="16" src="https://cdn.simpleicons.org/github/gray" alt="" />
        </a>
      </Small>
    </footer>
  )
}
