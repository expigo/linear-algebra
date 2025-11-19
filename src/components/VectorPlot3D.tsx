import Plot from 'react-plotly.js'

interface Vector {
  x: number
  y: number
  z: number
  color?: string
  label?: string
}

interface VectorPlot3DProps {
  vectors: Vector[]
  title?: string
  showAxes?: boolean
}

export default function VectorPlot3D({ vectors, title, showAxes = true }: VectorPlot3DProps) {
  // Create traces for each vector
  const traces: any[] = vectors.map((vector, index) => ({
    type: 'scatter3d',
    mode: 'lines+markers',
    x: [0, vector.x],
    y: [0, vector.y],
    z: [0, vector.z],
    line: {
      color: vector.color || `hsl(${index * 60}, 70%, 50%)`,
      width: 6
    },
    marker: {
      size: [0, 8],
      color: vector.color || `hsl(${index * 60}, 70%, 50%)`
    },
    name: vector.label || `Vector ${index + 1}`,
    hovertemplate: `<b>${vector.label || `Vector ${index + 1}`}</b><br>` +
      `x: %{x:.2f}<br>y: %{y:.2f}<br>z: %{z:.2f}<extra></extra>`
  }))

  // Add origin point
  traces.push({
    type: 'scatter3d',
    mode: 'markers',
    x: [0],
    y: [0],
    z: [0],
    marker: {
      size: [8],
      color: 'black'
    },
    name: 'Origin',
    showlegend: false,
    hoverinfo: 'skip'
  })

  const layout = {
    title: title,
    autosize: true,
    scene: {
      xaxis: { title: 'X', showgrid: showAxes, zeroline: true },
      yaxis: { title: 'Y', showgrid: showAxes, zeroline: true },
      zaxis: { title: 'Z', showgrid: showAxes, zeroline: true },
      aspectmode: 'cube' as const
    },
    margin: { l: 0, r: 0, b: 0, t: title ? 40 : 0 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }

  return (
    <div className="my-6 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Plot
        data={traces}
        layout={layout}
        config={{ responsive: true, displayModeBar: true }}
        className="w-full"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  )
}

export function VectorPlot2D({
  vectors,
  title,
  xRange = [-5, 5],
  yRange = [-5, 5]
}: {
  vectors: Array<{ x: number, y: number, color?: string, label?: string }>,
  title?: string,
  xRange?: [number, number],
  yRange?: [number, number]
}) {
  const traces: any[] = vectors.map((vector, index) => ({
    type: 'scatter',
    mode: 'lines+markers',
    x: [0, vector.x],
    y: [0, vector.y],
    line: {
      color: vector.color || `hsl(${index * 60}, 70%, 50%)`,
      width: 4
    },
    marker: {
      size: [0, 12],
      color: vector.color || `hsl(${index * 60}, 70%, 50%)`
    },
    name: vector.label || `Vector ${index + 1}`,
    hovertemplate: `<b>${vector.label || `Vector ${index + 1}`}</b><br>` +
      `x: %{x:.2f}<br>y: %{y:.2f}<extra></extra>`
  }))

  // Add origin
  traces.push({
    type: 'scatter',
    mode: 'markers',
    x: [0],
    y: [0],
    marker: { size: [10], color: 'black' },
    name: 'Origin',
    showlegend: false,
    hoverinfo: 'skip'
  })

  const layout: any = {
    title: title,
    xaxis: {
      title: 'X',
      range: xRange,
      zeroline: true,
      zerolinewidth: 2,
      gridcolor: '#e0e0e0'
    },
    yaxis: {
      title: 'Y',
      range: yRange,
      zeroline: true,
      zerolinewidth: 2,
      gridcolor: '#e0e0e0',
      scaleanchor: 'x'
    },
    margin: { l: 60, r: 40, b: 60, t: title ? 60 : 20 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: '#fafafa'
  }

  return (
    <div className="my-6 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Plot
        data={traces}
        layout={layout}
        config={{ responsive: true }}
        className="w-full"
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  )
}
