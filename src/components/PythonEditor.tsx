import { useState, useEffect, useRef } from 'react'
import { Play } from 'lucide-react'

interface PythonEditorProps {
  initialCode: string
  title?: string
}

export default function PythonEditor({ initialCode, title }: PythonEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const pyodideRef = useRef<any>(null)

  useEffect(() => {
    // Load Pyodide
    const loadPyodide = async () => {
      try {
        // @ts-ignore
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        })

        // Load numpy
        await pyodide.loadPackage(['numpy', 'matplotlib'])
        pyodideRef.current = pyodide
        setPyodideReady(true)
      } catch (error) {
        console.error('Failed to load Pyodide:', error)
        setOutput('Error loading Python environment. Please refresh the page.')
      }
    }

    // Add Pyodide script
    if (!document.getElementById('pyodide-script')) {
      const script = document.createElement('script')
      script.id = 'pyodide-script'
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
      script.async = true
      script.onload = () => loadPyodide()
      document.head.appendChild(script)
    } else {
      loadPyodide()
    }
  }, [])

  const runCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setOutput('Python environment is still loading...')
      return
    }

    setIsRunning(true)
    setOutput('')

    try {
      // Redirect stdout
      pyodideRef.current.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `)

      // Run user code
      await pyodideRef.current.runPythonAsync(code)

      // Get output
      const stdout = pyodideRef.current.runPython('sys.stdout.getvalue()')
      setOutput(stdout || 'Code executed successfully (no output)')
    } catch (error: any) {
      setOutput(`Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-600">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
        </div>
      )}

      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-4 font-mono text-sm bg-gray-900 text-gray-100 focus:outline-none resize-none"
          rows={Math.min(code.split('\n').length + 1, 20)}
          spellCheck={false}
        />
      </div>

      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 border-t border-gray-300 dark:border-gray-600">
        <button
          onClick={runCode}
          disabled={isRunning || !pyodideReady}
          className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-md text-sm font-medium"
        >
          <Play size={16} className="mr-2" />
          {isRunning ? 'Running...' : pyodideReady ? 'Run Code' : 'Loading...'}
        </button>

        <span className="text-xs text-gray-600 dark:text-gray-400">
          {pyodideReady ? 'Python 3.11 (Pyodide)' : 'Loading Python...'}
        </span>
      </div>

      {output && (
        <div className="border-t border-gray-300 dark:border-gray-600">
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Output:</p>
            <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono">
              {output}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
