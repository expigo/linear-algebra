import Section from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'

export default function OrthogonalityPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 6: Orthogonality
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Orthogonality (perpendicularity) is a central concept in linear algebra with numerous
          applications in machine learning, from QR decomposition to orthogonal projections.
        </p>

        <Definition title="Orthogonal Vectors">
          <p className="mb-2">
            Vectors <InlineMathBlock>{'\\mathbf{u}, \\mathbf{v}'}</InlineMathBlock> are{' '}
            <strong>orthogonal</strong> if:
          </p>
          <MathBlock>
            {`\\mathbf{u} \\cdot \\mathbf{v} = 0`}
          </MathBlock>
        </Definition>
      </Section>

      <Section title="Gram-Schmidt Process" id="gram-schmidt">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Gram-Schmidt process converts a basis into an orthonormal basis.
        </p>

        <Theorem title="Gram-Schmidt Orthogonalization">
          <p className="mb-2">
            Given linearly independent vectors{' '}
            <InlineMathBlock>{'\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}'}</InlineMathBlock>,
            construct orthonormal{' '}
            <InlineMathBlock>{'\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_n\\}'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`\\mathbf{u}_1 = \\frac{\\mathbf{v}_1}{\\|\\mathbf{v}_1\\|}`}
          </MathBlock>
          <MathBlock>
            {`\\mathbf{u}_k = \\frac{\\mathbf{v}_k - \\sum_{i=1}^{k-1} (\\mathbf{v}_k \\cdot \\mathbf{u}_i)\\mathbf{u}_i}{\\|\\mathbf{v}_k - \\sum_{i=1}^{k-1} (\\mathbf{v}_k \\cdot \\mathbf{u}_i)\\mathbf{u}_i\\|}`}
          </MathBlock>
        </Theorem>
      </Section>

      <Section title="QR Decomposition" id="qr">
        <Definition title="QR Decomposition">
          <p className="mb-2">
            Any matrix <InlineMathBlock>{'A'}</InlineMathBlock> can be factored as:
          </p>
          <MathBlock>
            {`A = QR`}
          </MathBlock>
          <p className="mt-2">
            where <InlineMathBlock>{'Q'}</InlineMathBlock> is orthogonal and{' '}
            <InlineMathBlock>{'R'}</InlineMathBlock> is upper triangular.
          </p>
        </Definition>
      </Section>

      <Section title="Python Implementation" id="python">
        <PythonEditor
          title="Gram-Schmidt Process"
          initialCode={`import numpy as np

def gram_schmidt(V):
    """Gram-Schmidt orthogonalization."""
    U = np.zeros_like(V, dtype=float)

    for i in range(V.shape[1]):
        # Start with original vector
        u = V[:, i].astype(float)

        # Subtract projections onto previous orthonormal vectors
        for j in range(i):
            u -= np.dot(U[:, j], V[:, i]) * U[:, j]

        # Normalize
        U[:, i] = u / np.linalg.norm(u)

    return U

# Test vectors
V = np.array([[1, 1, 0],
              [1, 0, 1],
              [0, 1, 1]], dtype=float)

print("Original vectors:")
print(V)
print()

U = gram_schmidt(V)
print("Orthonormal vectors:")
print(U)
print()

# Verify orthonormality
print("U^T U (should be I):")
print(U.T @ U)`}
        />

        <PythonEditor
          title="QR Decomposition"
          initialCode={`import numpy as np

A = np.array([[1, 1, 0],
              [1, 0, 1],
              [0, 1, 1]], dtype=float)

# QR decomposition
Q, R = np.linalg.qr(A)

print("Matrix A:")
print(A)
print()

print("Q (orthogonal):")
print(Q)
print()

print("R (upper triangular):")
print(R)
print()

print("Q @ R (should equal A):")
print(Q @ R)
print()

print("Q^T @ Q (should be I):")
print(Q.T @ Q)`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Orthogonal vectors have dot product zero</li>
          <li>• Gram-Schmidt creates orthonormal bases</li>
          <li>• QR decomposition: A = QR where Q is orthogonal</li>
        </ul>
      </div>
    </div>
  )
}
