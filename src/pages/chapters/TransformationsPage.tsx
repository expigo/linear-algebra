import Section from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import TransformationVisualizer from '../../components/TransformationVisualizer'

export default function TransformationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 8: Linear Transformations
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Linear transformations are functions between vector spaces that preserve vector addition
          and scalar multiplication. They provide the geometric interpretation of matrices.
        </p>

        <Definition title="Linear Transformation">
          <p className="mb-2">
            A function <InlineMathBlock>{'T: V \\to W'}</InlineMathBlock> is a{' '}
            <strong>linear transformation</strong> if:
          </p>
          <ol className="list-decimal ml-6 space-y-1">
            <li><InlineMathBlock>{'T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})'}</InlineMathBlock></li>
            <li><InlineMathBlock>{'T(c\\mathbf{v}) = cT(\\mathbf{v})'}</InlineMathBlock></li>
          </ol>
        </Definition>

        <Example title="Matrix as Linear Transformation">
          <p className="mb-2">
            Every matrix <InlineMathBlock>{'A \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock>{' '}
            defines a linear transformation:
          </p>
          <MathBlock>
            {`T(\\mathbf{x}) = A\\mathbf{x}`}
          </MathBlock>
        </Example>
      </Section>

      <Section title="Interactive Visualization" id="interactive">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Explore how different matrices transform the unit square and basis vectors:
        </p>

        <TransformationVisualizer />

        <Note>
          <strong>Key Observations:</strong>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>The columns of A tell you where the basis vectors e₁ and e₂ go</li>
            <li>The determinant tells you how areas scale (and whether orientation reverses)</li>
            <li>Linear transformations map lines to lines and preserve parallelism</li>
            <li>The origin always stays fixed</li>
          </ul>
        </Note>
      </Section>

      <Section title="Geometric Transformations" id="geometric">
        <Example title="Common 2D Transformations">
          <p className="mb-2"><strong>Rotation by θ:</strong></p>
          <MathBlock>
            {`R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Scaling:</strong></p>
          <MathBlock>
            {`S = \\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Reflection (across x-axis):</strong></p>
          <MathBlock>
            {`F = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}`}
          </MathBlock>
        </Example>
      </Section>

      <Section title="Python Visualization" id="python">
        <PythonEditor
          title="Visualizing Transformations"
          initialCode={`import numpy as np

# Original points (unit square)
points = np.array([[0, 1, 1, 0, 0],
                   [0, 0, 1, 1, 0]])

print("Original square vertices:")
print(points)
print()

# Rotation matrix (45 degrees)
theta = np.pi / 4
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])

# Apply transformation
transformed = R @ points

print("After rotation by 45°:")
print(transformed)
print()

# Scaling matrix
S = np.array([[2, 0],
              [0, 0.5]])

scaled = S @ points
print("After scaling (2x in x, 0.5x in y):")
print(scaled)`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Linear transformations preserve vector operations</li>
          <li>• Matrices represent linear transformations</li>
          <li>• Common transformations: rotation, scaling, reflection</li>
        </ul>
      </div>
    </div>
  )
}
