import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
  id?: string
}

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-primary-500">
        {title}
      </h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </section>
  )
}

export function SubSection({ title, children, id }: SectionProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  )
}
