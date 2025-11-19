import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  code,
  language = 'python',
  showLineNumbers = true
}: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <div className="my-4">
      <pre className={showLineNumbers ? 'line-numbers' : ''}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
