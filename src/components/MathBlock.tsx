import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

interface MathBlockProps {
  children: string
  inline?: boolean
}

export default function MathBlock({ children, inline = false }: MathBlockProps) {
  if (inline) {
    return <InlineMath math={children} />
  }
  return (
    <div className="my-4 overflow-x-auto">
      <BlockMath math={children} />
    </div>
  )
}

export function InlineMathBlock({ children }: { children: string }) {
  return <InlineMath math={children} />
}
