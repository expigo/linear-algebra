import { useState } from 'react'
import Plot from 'react-plotly.js'

interface TransformationVisualizerProps {
  title?: string
}

export default function TransformationVisualizer({ title = "Matrix Transformation Visualizer" }: TransformationVisualizerProps) {
  const [matrix, setMatrix] = useState({
    a: 1, b: 0,
    c: 0, d: 1
  })

  const presets = {
    identity: { a: 1, b: 0, c: 0, d: 1, name: 'Identity' },
    rotation45: { a: 0.707, b: -0.707, c: 0.707, d: 0.707, name: 'Rotation 45°' },
    rotation90: { a: 0, b: -1, c: 1, d: 0, name: 'Rotation 90°' },
    scale: { a: 2, b: 0, c: 0, d: 0.5, name: 'Scale (2x, 0.5y)' },
    shear: { a: 1, b: 0.5, c: 0, d: 1, name: 'Shear X' },
    reflect: { a: 1, b: 0, c: 0, d: -1, name: 'Reflect Y' },
    projection: { a: 1, b: 0, c: 0, d: 0, name: 'Project onto X' }
  }

  const applyPreset = (preset: typeof presets.identity) => {
    setMatrix({ a: preset.a, b: preset.b, c: preset.c, d: preset.d })
  }

  // Original unit square
  const originalSquare = {
    x: [0, 1, 1, 0, 0],
    y: [0, 0, 1, 1, 0]
  }

  // Transformed square
  const transformedSquare = {
    x: originalSquare.x.map((x, i) => matrix.a * x + matrix.b * originalSquare.y[i]),
    y: originalSquare.x.map((x, i) => matrix.c * x + matrix.d * originalSquare.y[i])
  }

  // Basis vectors
  const e1_original = { x: [0, 1], y: [0, 0] }
  const e2_original = { x: [0, 0], y: [0, 1] }
  const e1_transformed = { x: [0, matrix.a], y: [0, matrix.c] }
  const e2_transformed = { x: [0, matrix.b], y: [0, matrix.d] }

  const traces: any[] = [
    // Original square
    {
      type: 'scatter',
      mode: 'lines',
      x: originalSquare.x,
      y: originalSquare.y,
      line: { color: '#94a3b8', width: 2, dash: 'dash' },
      name: 'Original',
      showlegend: true
    },
    // Transformed square
    {
      type: 'scatter',
      mode: 'lines',
      x: transformedSquare.x,
      y: transformedSquare.y,
      line: { color: '#3b82f6', width: 3 },
      fill: 'toself',
      fillcolor: 'rgba(59, 130, 246, 0.1)',
      name: 'Transformed',
      showlegend: true
    },
    // Original e1
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: e1_original.x,
      y: e1_original.y,
      line: { color: '#ef4444', width: 2, dash: 'dash' },
      marker: { size: [0, 8] },
      name: 'e₁ (original)',
      showlegend: false
    },
    // Original e2
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: e2_original.x,
      y: e2_original.y,
      line: { color: '#10b981', width: 2, dash: 'dash' },
      marker: { size: [0, 8] },
      name: 'e₂ (original)',
      showlegend: false
    },
    // Transformed e1
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: e1_transformed.x,
      y: e1_transformed.y,
      line: { color: '#ef4444', width: 3 },
      marker: { size: [0, 10] },
      name: 'Ae₁',
      showlegend: true
    },
    // Transformed e2
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: e2_transformed.x,
      y: e2_transformed.y,
      line: { color: '#10b981', width: 3 },
      marker: { size: [0, 10] },
      name: 'Ae₂',
      showlegend: true
    }
  ]

  const layout: any = {
    title: title,
    xaxis: {
      range: [-3, 3],
      zeroline: true,
      zerolinewidth: 2,
      gridcolor: '#e5e7eb'
    },
    yaxis: {
      range: [-3, 3],
      zeroline: true,
      zerolinewidth: 2,
      gridcolor: '#e5e7eb',
      scaleanchor: 'x'
    },
    margin: { l: 50, r: 50, b: 50, t: 80 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: '#f9fafb',
    showlegend: true,
    legend: {
      x: 1.05,
      y: 1,
      xanchor: 'left'
    }
  }

  const det = matrix.a * matrix.d - matrix.b * matrix.c

  return (
    <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Transformation
        </h3>

        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Transformation Matrix:</p>
          <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 mb-4">
            <span className="text-2xl">A =</span>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={matrix.a}
                onChange={(e) => setMatrix({ ...matrix, a: parseFloat(e.target.value) || 0 })}
                step="0.1"
                className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="number"
                value={matrix.b}
                onChange={(e) => setMatrix({ ...matrix, b: parseFloat(e.target.value) || 0 })}
                step="0.1"
                className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="number"
                value={matrix.c}
                onChange={(e) => setMatrix({ ...matrix, c: parseFloat(e.target.value) || 0 })}
                step="0.1"
                className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="number"
                value={matrix.d}
                onChange={(e) => setMatrix({ ...matrix, d: parseFloat(e.target.value) || 0 })}
                step="0.1"
                className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Presets:</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(presets).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => applyPreset(preset)}
                  className="px-3 py-1 text-sm bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800 text-primary-700 dark:text-primary-300 rounded"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="font-semibold text-blue-900 dark:text-blue-100">Determinant:</p>
              <p className="text-blue-800 dark:text-blue-200 font-mono">
                det(A) = {det.toFixed(3)}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                {Math.abs(det) < 0.001 ? 'Singular (no inverse)' :
                 det > 0 ? 'Preserves orientation' : 'Reverses orientation'}
              </p>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <p className="font-semibold text-green-900 dark:text-green-100">Area Scale:</p>
              <p className="text-green-800 dark:text-green-200 font-mono">
                |det(A)| = {Math.abs(det).toFixed(3)}
              </p>
              <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                Area multiplied by {Math.abs(det).toFixed(2)}×
              </p>
            </div>
          </div>
        </div>
      </div>

      <Plot
        data={traces}
        layout={layout}
        config={{ responsive: true }}
        style={{ width: '100%', height: '500px' }}
      />

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>How to use:</strong></p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Adjust matrix entries to see how the transformation changes</li>
          <li>Try presets to see common transformations</li>
          <li>Watch how the unit square and basis vectors transform</li>
          <li>Note how determinant relates to area scaling</li>
        </ul>
      </div>
    </div>
  )
}
