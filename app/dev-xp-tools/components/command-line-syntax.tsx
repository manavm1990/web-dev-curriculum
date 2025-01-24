import Mermaid from '@/components/ui/mermaid'
import Bq from '@/components/ui/typography/bq'
import H2 from '@/components/ui/typography/headings/h2'
import Large from '@/components/ui/typography/large'
import Lead from '@/components/ui/typography/lead'
import { UL, LI } from '@/components/ui/typography/list'

export default function CommandLineSyntax() {
  return (
    <>
      <H2>Understanding Command Line Syntax</H2>
      <Lead>
        Throughout this guide, you'll be using command line instructions. Command line syntax
        requires spaces between commands and their flags. This is a fundamental rule that ensures
        your commands work correctly.
      </Lead>

      <Mermaid
        chart={`
    graph TB
        subgraph "✅ Correct Command"
        A[git] --> |space| B[--version]
        end

        subgraph "❌ Wrong Command"
        C[git--version] --> D[ERROR!]
        end

        classDef correct fill:#e1f5fe,stroke:#1e40af,stroke-width:2px
        classDef wrong fill:#fee2e2,stroke:#991b1b,stroke-width:2px

        class A,B correct
        class C,D wrong
    `}
      />

      <Bq quote="Think of command line syntax like words in a sentence. Just like you need spaces between words to make a sentence readable, you need spaces between parts of a command to make it executable." />

      <Large className="!mb-0">⚠️ Commands won't work if you squish them together!</Large>

      <UL className="!ml-6">
        <LI>❌ WRONG: `git--version</LI>
        <LI>✅ RIGHT: `git --version`</LI>
      </UL>
    </>
  )
}
