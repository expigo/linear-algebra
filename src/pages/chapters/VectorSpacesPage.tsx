import Section from '../../components/Section'
import { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Example } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'

export default function VectorSpacesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 4: Vector Spaces
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Vector spaces abstract the properties of vectors into a general algebraic structure.
          Understanding vector spaces is key to grasping the theoretical foundations of linear algebra.
        </p>

        <Definition title="Vector Space">
          <p className="mb-2">
            A <strong>vector space</strong> over <InlineMathBlock>{'\\mathbb{R}'}</InlineMathBlock> is
            a set <InlineMathBlock>{'V'}</InlineMathBlock> with operations of addition and scalar
            multiplication satisfying 10 axioms (closure, associativity, commutativity, etc.).
          </p>
        </Definition>

        <Example title="Examples of Vector Spaces">
          <ul className="list-disc ml-6 space-y-2">
            <li><InlineMathBlock>{'\\mathbb{R}^n'}</InlineMathBlock>: n-dimensional real vectors</li>
            <li>Matrices <InlineMathBlock>{'\\mathbb{R}^{m \\times n}'}</InlineMathBlock></li>
            <li>Polynomials of degree ≤ n</li>
            <li>Continuous functions on [a, b]</li>
          </ul>
        </Example>
      </Section>

      <Section title="Subspaces" id="subspaces">
        <Definition title="Subspace">
          <p className="mb-2">
            A subset <InlineMathBlock>{'W \\subseteq V'}</InlineMathBlock> is a <strong>subspace</strong> if:
          </p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>The zero vector is in W</li>
            <li>W is closed under addition</li>
            <li>W is closed under scalar multiplication</li>
          </ol>
        </Definition>
      </Section>

      <Section title="Basis and Dimension" id="basis">
        <Definition title="Basis">
          <p className="mb-2">
            A <strong>basis</strong> for a vector space V is a linearly independent set that spans V.
          </p>
        </Definition>

        <Definition title="Dimension">
          <p className="mb-2">
            The <strong>dimension</strong> of V is the number of vectors in any basis for V.
          </p>
        </Definition>
      </Section>

      <Section title="Python Examples" id="python">
        <PythonEditor
          title="Checking Linear Independence"
          initialCode={`import numpy as np

# Vectors in R^3
v1 = np.array([1, 0, 0])
v2 = np.array([0, 1, 0])
v3 = np.array([0, 0, 1])

# Stack as columns
A = np.column_stack([v1, v2, v3])

print("Matrix A (columns are vectors):")
print(A)
print()

# Check rank (number of linearly independent columns)
rank = np.linalg.matrix_rank(A)
print(f"Rank of A: {rank}")
print(f"Dimension: {A.shape[1]}")
print(f"Linearly independent? {rank == A.shape[1]}")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Vector spaces generalize the concept of vectors</li>
          <li>• Subspaces are closed under addition and scalar multiplication</li>
          <li>• Basis provides a minimal spanning set</li>
          <li>• Dimension counts basis vectors</li>
        </ul>
      </div>
    </div>
  )
}
