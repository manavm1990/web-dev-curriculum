import ExternalLink from '@/components/ui/external-link'
import Mermaid from '@/components/mermaid'
import Bq from '@/components/ui/typography/bq'
import Code from '@/components/ui/typography/code'
import H1 from '@/components/ui/typography/headings/h1'
import H2 from '@/components/ui/typography/headings/h2'
import H3 from '@/components/ui/typography/headings/h3'
import H4 from '@/components/ui/typography/headings/h4'
import Large from '@/components/ui/typography/large'
import Lead from '@/components/ui/typography/lead'
import { LI, OL, UL } from '@/components/ui/typography/list'
import P from '@/components/ui/typography/p'
import Small from '@/components/ui/typography/small'
import Table from '@/components/ui/typography/table'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    blockquote: Bq,
    code: Code,
    small: Small,
    table: Table,
    p: P,
    ul: UL,
    ol: OL,
    li: LI,
    strong: Large,
    a: ExternalLink,
    Lead,
    Mermaid,
    ...components,
  }
}
