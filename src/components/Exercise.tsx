import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ExerciseProps {
  problem: string
  solution: string
  hint?: string
}

export default function Exercise({ problem, solution, hint }: ExerciseProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="my-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="mb-4">
        <p className="font-semibold text-gray-900 dark:text-white mb-2">Exercise:</p>
        <p className="text-gray-800 dark:text-gray-200">{problem}</p>
      </div>

      {hint && (
        <div className="mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700"
          >
            {showHint ? <ChevronUp size={16} className="mr-1" /> : <ChevronDown size={16} className="mr-1" />}
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          {showHint && (
            <div className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">{hint}</p>
            </div>
          )}
        </div>
      )}

      <div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700"
        >
          {showSolution ? <ChevronUp size={16} className="mr-1" /> : <ChevronDown size={16} className="mr-1" />}
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution && (
          <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Solution:</p>
            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {solution}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
