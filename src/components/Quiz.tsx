import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title?: string
}

export default function Quiz({ questions, title = 'Quiz' }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (!showResults) {
      const newAnswers = [...selectedAnswers]
      newAnswers[questionIndex] = optionIndex
      setSelectedAnswers(newAnswers)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setSelectedAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
  }

  const score = selectedAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length

  return (
    <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h3>

      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-8 last:mb-4">
          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {qIndex + 1}. {question.question}
          </p>

          <div className="space-y-3">
            {question.options.map((option, oIndex) => {
              const isSelected = selectedAnswers[qIndex] === oIndex
              const isCorrect = oIndex === question.correctAnswer
              const showCorrect = showResults && isCorrect
              const showIncorrect = showResults && isSelected && !isCorrect

              return (
                <button
                  key={oIndex}
                  onClick={() => handleAnswerSelect(qIndex, oIndex)}
                  disabled={showResults}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${isSelected && !showResults ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : ''}
                    ${!isSelected && !showResults ? 'border-gray-300 dark:border-gray-600 hover:border-primary-300' : ''}
                    ${showCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''}
                    ${showIncorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}
                    ${showResults && !isSelected && !isCorrect ? 'opacity-50' : ''}
                    disabled:cursor-not-allowed
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200">{option}</span>
                    {showCorrect && <CheckCircle className="text-green-600" size={20} />}
                    {showIncorrect && <XCircle className="text-red-600" size={20} />}
                  </div>
                </button>
              )
            })}
          </div>

          {showResults && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        {showResults ? (
          <>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Score: {score} / {questions.length} (
              {Math.round((score / questions.length) * 100)}%)
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium"
            >
              Try Again
            </button>
          </>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers.some((answer) => answer === null)}
            className="ml-auto px-6 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg font-medium"
          >
            Submit Answers
          </button>
        )}
      </div>
    </div>
  )
}
