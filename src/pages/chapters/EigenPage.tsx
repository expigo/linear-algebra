import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'
import { VectorPlot2D } from '../../components/VectorPlot3D'

export default function EigenPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 5: Eigenvalues and Eigenvectors
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Eigenvalues and eigenvectors reveal the fundamental behavior of linear transformations.
          They are absolutely essential in machine learning for dimensionality reduction (PCA),
          graph algorithms (PageRank), and understanding neural network dynamics.
        </p>

        <Definition title="Eigenvalue and Eigenvector">
          <p className="mb-2">
            For a square matrix <InlineMathBlock>{'A \\in \\mathbb{R}^{n \\times n}'}</InlineMathBlock>,
            a non-zero vector <InlineMathBlock>{'\\mathbf{v}'}</InlineMathBlock> is an{' '}
            <strong>eigenvector</strong> with corresponding <strong>eigenvalue</strong>{' '}
            <InlineMathBlock>{'\\lambda'}</InlineMathBlock> if:
          </p>
          <MathBlock>
            {`A\\mathbf{v} = \\lambda\\mathbf{v}`}
          </MathBlock>
          <p className="mt-2">
            This means <InlineMathBlock>{'A'}</InlineMathBlock> transforms{' '}
            <InlineMathBlock>{'\\mathbf{v}'}</InlineMathBlock> only by scaling it by{' '}
            <InlineMathBlock>{'\\lambda'}</InlineMathBlock> (no rotation).
          </p>
        </Definition>

        <Example title="Geometric Intuition">
          <p className="mb-3">
            Consider the transformation matrix (stretches x by 2, y by 3):
          </p>
          <MathBlock>
            {`A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}`}
          </MathBlock>
          <p className="my-3">The eigenvectors are the coordinate axes:</p>
          <MathBlock>
            {`A\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} \\quad (\\lambda_1 = 2)`}
          </MathBlock>
          <MathBlock>
            {`A\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 3 \\end{bmatrix} = 3\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} \\quad (\\lambda_2 = 3)`}
          </MathBlock>
        </Example>

        <VectorPlot2D
          vectors={[
            { x: 1, y: 0, color: '#3b82f6', label: 'v₁ = [1, 0], λ₁ = 2' },
            { x: 0, y: 1, color: '#ef4444', label: 'v₂ = [0, 1], λ₂ = 3' },
            { x: 2, y: 0, color: '#3b82f6', label: 'Av₁ = 2v₁' },
            { x: 0, y: 3, color: '#ef4444', label: 'Av₂ = 3v₂' }
          ]}
          title="Eigenvectors stay on same line after transformation"
        />
      </Section>

      <Section title="Computing Eigenvalues" id="computing">
        <SubSection title="Characteristic Equation">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            To find eigenvalues, we solve:
          </p>
          <MathBlock>
            {`A\\mathbf{v} = \\lambda\\mathbf{v} \\implies (A - \\lambda I)\\mathbf{v} = \\mathbf{0}`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 my-3">
            For non-trivial solutions (<InlineMathBlock>{'\\mathbf{v} \\neq \\mathbf{0}'}</InlineMathBlock>),
            we need:
          </p>
          <MathBlock>
            {`\\det(A - \\lambda I) = 0`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            This is the <strong>characteristic equation</strong>.
          </p>
        </SubSection>

        <Example title="Computing Eigenvalues">
          <p className="mb-2">
            Find eigenvalues of <InlineMathBlock>{'A = \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix}'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`A - \\lambda I = \\begin{bmatrix} 4-\\lambda & 2 \\\\ 1 & 3-\\lambda \\end{bmatrix}`}
          </MathBlock>
          <MathBlock>
            {`\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 \\cdot 1 = \\lambda^2 - 7\\lambda + 10`}
          </MathBlock>
          <MathBlock>
            {`\\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda - 5)(\\lambda - 2) = 0`}
          </MathBlock>
          <p className="mt-2">
            Eigenvalues: <InlineMathBlock>{'\\lambda_1 = 5'}</InlineMathBlock>,{' '}
            <InlineMathBlock>{'\\lambda_2 = 2'}</InlineMathBlock>
          </p>
        </Example>

        <SubSection title="Computing Eigenvectors">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            For each eigenvalue <InlineMathBlock>{'\\lambda'}</InlineMathBlock>, solve:
          </p>
          <MathBlock>
            {`(A - \\lambda I)\\mathbf{v} = \\mathbf{0}`}
          </MathBlock>

          <Example title="Finding Eigenvectors">
            <p className="mb-2">
              For <InlineMathBlock>{'\\lambda_1 = 5'}</InlineMathBlock>:
            </p>
            <MathBlock>
              {`(A - 5I)\\mathbf{v} = \\begin{bmatrix} -1 & 2 \\\\ 1 & -2 \\end{bmatrix}\\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\mathbf{0}`}
            </MathBlock>
            <p className="my-2">This gives: <InlineMathBlock>{'-v_1 + 2v_2 = 0 \\implies v_1 = 2v_2'}</InlineMathBlock></p>
            <p>
              Eigenvector: <InlineMathBlock>{'\\mathbf{v}_1 = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}'}</InlineMathBlock> (or any scalar multiple)
            </p>
          </Example>
        </SubSection>
      </Section>

      <Section title="Diagonalization" id="diagonalization">
        <Definition title="Diagonalizable Matrix">
          <p className="mb-2">
            A matrix <InlineMathBlock>{'A'}</InlineMathBlock> is <strong>diagonalizable</strong> if
            it can be written as:
          </p>
          <MathBlock>
            {`A = PDP^{-1}`}
          </MathBlock>
          <p className="mt-2">
            where <InlineMathBlock>{'D'}</InlineMathBlock> is diagonal (containing eigenvalues) and{' '}
            <InlineMathBlock>{'P'}</InlineMathBlock> has eigenvectors as columns.
          </p>
        </Definition>

        <Theorem title="Diagonalization Theorem">
          <p>
            An <InlineMathBlock>{'n \\times n'}</InlineMathBlock> matrix is diagonalizable if and
            only if it has <InlineMathBlock>{'n'}</InlineMathBlock> linearly independent eigenvectors.
          </p>
        </Theorem>

        <Note>
          <p className="mb-2"><strong>Why diagonalization matters:</strong></p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Computing <InlineMathBlock>{'A^k'}</InlineMathBlock> becomes easy: <InlineMathBlock>{'A^k = PD^kP^{-1}'}</InlineMathBlock></li>
            <li><InlineMathBlock>{'D^k'}</InlineMathBlock> is trivial: just raise diagonal entries to power k</li>
            <li>Essential for understanding long-term behavior of dynamical systems</li>
          </ul>
        </Note>

        <Example title="Matrix Powers via Diagonalization">
          <p className="mb-2">
            To compute <InlineMathBlock>{'A^{100}'}</InlineMathBlock> where <InlineMathBlock>{'A = PDP^{-1}'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`A^{100} = (PDP^{-1})^{100} = PD^{100}P^{-1}`}
          </MathBlock>
          <p className="mt-2">
            And <InlineMathBlock>{'D^{100}'}</InlineMathBlock> is just:
          </p>
          <MathBlock>
            {`D^{100} = \\begin{bmatrix} \\lambda_1^{100} & 0 & \\cdots \\\\ 0 & \\lambda_2^{100} & \\cdots \\\\ \\vdots & \\vdots & \\ddots \\end{bmatrix}`}
          </MathBlock>
        </Example>
      </Section>

      <Section title="Symmetric Matrices" id="symmetric">
        <Theorem title="Spectral Theorem">
          <p className="mb-2">
            If <InlineMathBlock>{'A'}</InlineMathBlock> is a <strong>symmetric</strong> matrix, then:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>All eigenvalues are <strong>real</strong></li>
            <li>Eigenvectors corresponding to different eigenvalues are <strong>orthogonal</strong></li>
            <li><InlineMathBlock>{'A'}</InlineMathBlock> can be written as <InlineMathBlock>{'A = Q\\Lambda Q^T'}</InlineMathBlock> where <InlineMathBlock>{'Q'}</InlineMathBlock> is orthogonal</li>
          </ol>
        </Theorem>

        <Note>
          This is why symmetric matrices are so important in ML - covariance matrices are symmetric,
          and the Spectral Theorem guarantees nice properties for PCA!
        </Note>
      </Section>

      <Section title="Python Implementation" id="python">
        <PythonEditor
          title="Computing Eigenvalues and Eigenvectors"
          initialCode={`import numpy as np

# Define matrix
A = np.array([[4, 2],
              [1, 3]])

print("Matrix A:")
print(A)
print()

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:")
print(eigenvalues)
print()

print("Eigenvectors (as columns):")
print(eigenvectors)
print()

# Verify: Av = λv
for i in range(len(eigenvalues)):
    v = eigenvectors[:, i]
    lam = eigenvalues[i]

    Av = A @ v
    lam_v = lam * v

    print(f"Eigenvalue {i+1}: λ = {lam:.4f}")
    print(f"Av = {Av}")
    print(f"λv = {lam_v}")
    print(f"Match? {np.allclose(Av, lam_v)}")
    print()`}
        />

        <PythonEditor
          title="Diagonalization"
          initialCode={`import numpy as np

A = np.array([[4, 2],
              [1, 3]])

# Eigendecomposition
eigenvalues, P = np.linalg.eig(A)
D = np.diag(eigenvalues)

print("A =")
print(A)
print()

print("P (eigenvectors as columns):")
print(P)
print()

print("D (diagonal matrix of eigenvalues):")
print(D)
print()

# Reconstruct A = PDP^(-1)
P_inv = np.linalg.inv(P)
A_reconstructed = P @ D @ P_inv

print("P @ D @ P^(-1) =")
print(A_reconstructed)
print()

print("Match original A?", np.allclose(A, A_reconstructed))
print()

# Compute A^10 efficiently
A_10_slow = np.linalg.matrix_power(A, 10)
D_10 = np.diag(eigenvalues**10)
A_10_fast = P @ D_10 @ P_inv

print("A^10 (via repeated multiplication):")
print(A_10_slow)
print()

print("A^10 (via diagonalization):")
print(A_10_fast)
print()

print("Match?", np.allclose(A_10_slow, A_10_fast))`}
        />

        <PythonEditor
          title="Symmetric Matrix Eigendecomposition"
          initialCode={`import numpy as np

# Create symmetric matrix (e.g., covariance matrix)
A_sym = np.array([[4, 1, 2],
                  [1, 3, 1],
                  [2, 1, 5]])

print("Symmetric matrix A:")
print(A_sym)
print("Is symmetric?", np.allclose(A_sym, A_sym.T))
print()

# Eigendecomposition
eigenvalues, Q = np.linalg.eig(A_sym)

print("Eigenvalues (all real for symmetric matrix):")
print(eigenvalues)
print()

print("Eigenvectors Q:")
print(Q)
print()

# Check orthogonality of eigenvectors
print("Q^T @ Q (should be I for orthogonal matrix):")
print(Q.T @ Q)
print()

# Reconstruct using A = QΛQ^T
Lambda = np.diag(eigenvalues)
A_reconstructed = Q @ Lambda @ Q.T

print("Q @ Λ @ Q^T =")
print(A_reconstructed)
print()

print("Match original?", np.allclose(A_sym, A_reconstructed))`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Find the eigenvalues and eigenvectors of A = [[3, 1], [0, 2]]"
          hint="Start by computing det(A - λI) = 0"
          solution={`Characteristic equation:
det(A - λI) = det([[3-λ, 1], [0, 2-λ]])
            = (3-λ)(2-λ) - 0
            = (3-λ)(2-λ) = 0

Eigenvalues: λ₁ = 3, λ₂ = 2

For λ₁ = 3:
(A - 3I)v = [[0, 1], [0, -1]][v₁, v₂] = 0
=> v₂ = 0
Eigenvector: v₁ = [1, 0]

For λ₂ = 2:
(A - 2I)v = [[1, 1], [0, 0]][v₁, v₂] = 0
=> v₁ + v₂ = 0 => v₁ = -v₂
Eigenvector: v₂ = [1, -1] (or [-1, 1])`}
        />

        <Exercise
          problem="If A has eigenvalues 2 and 3, what are the eigenvalues of A², A⁻¹, and 3A?"
          hint="If Av = λv, then A²v = λ²v"
          solution={`If Av = λv:

A²v = A(Av) = A(λv) = λ(Av) = λ²v
So A² has eigenvalues λ² = 4 and 9

A⁻¹(Av) = A⁻¹(λv) => v = λA⁻¹v => A⁻¹v = (1/λ)v
So A⁻¹ has eigenvalues 1/2 and 1/3

(3A)v = 3(Av) = 3λv
So 3A has eigenvalues 6 and 9`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Eigenvalues & Eigenvectors Quiz"
          questions={[
            {
              question: 'If v is an eigenvector of A with eigenvalue λ, what is true?',
              options: [
                'Av = v',
                'Av = λ',
                'Av = λv',
                'Av = 0'
              ],
              correctAnswer: 2,
              explanation: 'By definition, an eigenvector v satisfies Av = λv.'
            },
            {
              question: 'What are the eigenvalues of a diagonal matrix?',
              options: [
                'All zeros',
                'All ones',
                'The diagonal entries',
                'The off-diagonal entries'
              ],
              correctAnswer: 2,
              explanation: 'For a diagonal matrix, the eigenvalues are exactly the diagonal entries.'
            },
            {
              question: 'For a symmetric matrix, eigenvectors corresponding to different eigenvalues are:',
              options: [
                'Parallel',
                'Orthogonal',
                'Equal',
                'Zero'
              ],
              correctAnswer: 1,
              explanation: 'The Spectral Theorem states that for symmetric matrices, eigenvectors for different eigenvalues are orthogonal.'
            },
            {
              question: 'If A is a 3×3 matrix with eigenvalues 2, 3, 5, what is det(A)?',
              options: ['10', '30', '15', '6'],
              correctAnswer: 1,
              explanation: 'The determinant equals the product of eigenvalues: det(A) = 2 × 3 × 5 = 30.'
            },
            {
              question: 'Why is diagonalization useful?',
              options: [
                'Makes matrix multiplication faster',
                'Makes computing matrix powers efficient',
                'Simplifies eigenvalue computation',
                'Reduces matrix size'
              ],
              correctAnswer: 1,
              explanation: 'Diagonalization allows efficient computation of A^k = PD^kP^(-1), where D^k is trivial to compute.'
            }
          ]}
        />
      </Section>

      <Section title="Applications in Machine Learning" id="ml">
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Principal Component Analysis (PCA)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              PCA finds principal components by computing eigenvectors of the covariance matrix.
              The eigenvectors with largest eigenvalues capture the most variance in the data.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              PageRank Algorithm
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Google's PageRank computes the dominant eigenvector of the web's link matrix to
              rank pages by importance.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Spectral Clustering
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Uses eigenvectors of the graph Laplacian to cluster data points by connectivity.
            </p>
          </div>
        </div>

        <PythonEditor
          title="ML Application: Simple PCA"
          initialCode={`import numpy as np

# Generate 2D data
np.random.seed(42)
n = 100

# Data with correlation
X = np.random.randn(n, 2)
X[:, 1] = X[:, 0] * 2 + X[:, 1] * 0.5  # y correlated with x

print("Data shape:", X.shape)
print("First 5 samples:")
print(X[:5])
print()

# Center the data
X_centered = X - np.mean(X, axis=0)

# Compute covariance matrix
cov_matrix = (X_centered.T @ X_centered) / (n - 1)
print("Covariance matrix:")
print(cov_matrix)
print()

# Eigendecomposition
eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)

# Sort by eigenvalue (descending)
idx = eigenvalues.argsort()[::-1]
eigenvalues = eigenvalues[idx]
eigenvectors = eigenvectors[:, idx]

print("Eigenvalues (variance along each PC):")
print(eigenvalues)
print()

print("Eigenvectors (principal components):")
print(eigenvectors)
print()

# Variance explained
var_explained = eigenvalues / eigenvalues.sum()
print("Variance explained by each PC:")
print(f"PC1: {var_explained[0]*100:.2f}%")
print(f"PC2: {var_explained[1]*100:.2f}%")
print()

# Project data onto first principal component
X_pca = X_centered @ eigenvectors[:, 0:1]
print("Data projected onto PC1 (shape):", X_pca.shape)
print("First 5 projected values:", X_pca[:5].ravel())`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Eigenvectors satisfy Av = λv (direction preserved under transformation)</li>
          <li>• Find eigenvalues by solving det(A - λI) = 0</li>
          <li>• Diagonalization A = PDP⁻¹ enables efficient matrix powers</li>
          <li>• Symmetric matrices have real eigenvalues and orthogonal eigenvectors</li>
          <li>• Critical for PCA, PageRank, spectral clustering in ML</li>
        </ul>
      </div>
    </div>
  )
}
