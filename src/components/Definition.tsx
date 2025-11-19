import { ReactNode } from 'react'
import { BookOpen } from 'lucide-react'

interface DefinitionProps {
  title: string
  children: ReactNode
}

export default function Definition({ title, children }: DefinitionProps) {
  return (
    <div className="my-6 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
      <div className="flex items-start">
        <BookOpen className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
            Definition: {title}
          </h4>
          <div className="text-gray-800 dark:text-gray-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Theorem({ title, children }: DefinitionProps) {
  return (
    <div className="my-6 p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg">
      <div className="flex items-start">
        <div className="text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0 font-bold">
          &#9733;
        </div>
        <div>
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
            Theorem: {title}
          </h4>
          <div className="text-gray-800 dark:text-gray-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Example({ title, children }: DefinitionProps) {
  return (
    <div className="my-6 p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
      <div>
        <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">
          Example: {title}
        </h4>
        <div className="text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
      <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Note:</p>
      <div className="text-gray-800 dark:text-gray-200 text-sm">
        {children}
      </div>
    </div>
  )
}
