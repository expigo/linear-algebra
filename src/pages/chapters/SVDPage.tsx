import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function SVDPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 7: Singular Value Decomposition (SVD)
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Singular Value Decomposition (SVD) is one of the most important matrix factorizations
          in applied linear algebra. It generalizes eigendecomposition to non-square matrices
          and has countless applications in machine learning, from recommender systems to image
          compression to natural language processing.
        </p>

        <Definition title="Singular Value Decomposition">
          <p className="mb-2">
            Any matrix <InlineMathBlock>{'A \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock> can be
            factored as:
          </p>
          <MathBlock>
            {`A = U\\Sigma V^T`}
          </MathBlock>
          <p className="mt-2">where:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li><InlineMathBlock>{'U \\in \\mathbb{R}^{m \\times m}'}</InlineMathBlock> is orthogonal (left singular vectors)</li>
            <li><InlineMathBlock>{'\\Sigma \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock> is diagonal (singular values)</li>
            <li><InlineMathBlock>{'V \\in \\mathbb{R}^{n \\times n}'}</InlineMathBlock> is orthogonal (right singular vectors)</li>
          </ul>
        </Definition>

        <Note>
          The singular values in <InlineMathBlock>{'\\Sigma'}</InlineMathBlock> are conventionally
          ordered: <InlineMathBlock>{'\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0'}</InlineMathBlock>.
        </Note>
      </Section>

      <Section title="Computing SVD" id="computing">
        <SubSection title="Connection to Eigenvalues">
          <Theorem title="SVD via Eigendecomposition">
            <p className="mb-2">The SVD of <InlineMathBlock>{'A'}</InlineMathBlock> can be computed using eigendecompositions:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>
                <InlineMathBlock>{'V'}</InlineMathBlock> contains eigenvectors of{' '}
                <InlineMathBlock>{'A^TA'}</InlineMathBlock>
              </li>
              <li>
                <InlineMathBlock>{'U'}</InlineMathBlock> contains eigenvectors of{' '}
                <InlineMathBlock>{'AA^T'}</InlineMathBlock>
              </li>
              <li>
                Singular values are square roots of eigenvalues of{' '}
                <InlineMathBlock>{'A^TA'}</InlineMathBlock> (or <InlineMathBlock>{'AA^T'}</InlineMathBlock>):{' '}
                <InlineMathBlock>{'\\sigma_i = \\sqrt{\\lambda_i}'}</InlineMathBlock>
              </li>
            </ul>
          </Theorem>
        </SubSection>

        <Example title="Simple SVD Example">
          <p className="mb-2">Consider:</p>
          <MathBlock>
            {`A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Step 1:</strong> Compute <InlineMathBlock>{'A^TA'}</InlineMathBlock></p>
          <MathBlock>
            {`A^TA = \\begin{bmatrix} 10 & 6 \\\\ 6 & 10 \\end{bmatrix}`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Step 2:</strong> Find eigenvalues of <InlineMathBlock>{'A^TA'}</InlineMathBlock></p>
          <MathBlock>
            {`\\det(A^TA - \\lambda I) = (10-\\lambda)^2 - 36 = 0`}
          </MathBlock>
          <p className="my-2">
            Eigenvalues: <InlineMathBlock>{'\\lambda_1 = 16, \\lambda_2 = 4'}</InlineMathBlock>
          </p>
          <p>
            Singular values: <InlineMathBlock>{'\\sigma_1 = 4, \\sigma_2 = 2'}</InlineMathBlock>
          </p>
        </Example>
      </Section>

      <Section title="Properties and Interpretation" id="properties">
        <SubSection title="Rank and Approximation">
          <Theorem title="Rank from SVD">
            <p>
              The rank of <InlineMathBlock>{'A'}</InlineMathBlock> equals the number of non-zero
              singular values.
            </p>
          </Theorem>

          <Theorem title="Low-Rank Approximation">
            <p className="mb-2">
              The best rank-<InlineMathBlock>{'k'}</InlineMathBlock> approximation to{' '}
              <InlineMathBlock>{'A'}</InlineMathBlock> (in Frobenius or 2-norm) is obtained by
              keeping only the <InlineMathBlock>{'k'}</InlineMathBlock> largest singular values:
            </p>
            <MathBlock>
              {`A_k = \\sum_{i=1}^k \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T`}
            </MathBlock>
            <p className="mt-2">
              This is the foundation of many ML algorithms including PCA and recommender systems.
            </p>
          </Theorem>
        </SubSection>

        <SubSection title="Geometric Interpretation">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            SVD decomposes any linear transformation into three simple steps:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><InlineMathBlock>{'V^T'}</InlineMathBlock>: Rotation/reflection in input space</li>
            <li><InlineMathBlock>{'\\Sigma'}</InlineMathBlock>: Scaling along coordinate axes</li>
            <li><InlineMathBlock>{'U'}</InlineMathBlock>: Rotation/reflection in output space</li>
          </ol>
        </SubSection>

        <SubSection title="Relationship to PCA">
          <Note>
            <p className="mb-2"><strong>SVD and PCA connection:</strong></p>
            <p>
              For centered data matrix <InlineMathBlock>{'X'}</InlineMathBlock>, the right singular
              vectors <InlineMathBlock>{'V'}</InlineMathBlock> are the principal components, and{' '}
              <InlineMathBlock>{'\\sigma_i^2/(n-1)'}</InlineMathBlock> gives the variance along PC <InlineMathBlock>{'i'}</InlineMathBlock>.
            </p>
          </Note>
        </SubSection>
      </Section>

      <Section title="Python Implementation" id="python">
        <PythonEditor
          title="Computing SVD"
          initialCode={`import numpy as np

# Create a matrix
A = np.array([[3, 1, 1],
              [1, 3, 1]])

print("Matrix A (2×3):")
print(A)
print(f"Shape: {A.shape}")
print()

# Compute SVD
U, s, VT = np.linalg.svd(A)

# Note: np.linalg.svd returns s as a 1D array
# We need to construct the full Sigma matrix
Sigma = np.zeros_like(A, dtype=float)
Sigma[:len(s), :len(s)] = np.diag(s)

print("U (left singular vectors):")
print(U)
print(f"Shape: {U.shape}")
print()

print("Singular values:")
print(s)
print()

print("Sigma (diagonal matrix):")
print(Sigma)
print(f"Shape: {Sigma.shape}")
print()

print("V^T (right singular vectors transposed):")
print(VT)
print(f"Shape: {VT.shape}")
print()

# Reconstruct A
A_reconstructed = U @ Sigma @ VT
print("U @ Sigma @ V^T =")
print(A_reconstructed)
print()

print("Match original?", np.allclose(A, A_reconstructed))
print()

# Verify orthogonality
print("U^T @ U =")
print(U.T @ U)
print()

print("V^T @ V^T^T = V @ V^T =")
print(VT @ VT.T)`}
        />

        <PythonEditor
          title="Low-Rank Approximation"
          initialCode={`import numpy as np

# Create a larger matrix
np.random.seed(42)
A = np.random.randn(5, 4)

print("Original matrix A:")
print(A)
print()

# Compute SVD
U, s, VT = np.linalg.svd(A, full_matrices=False)

print("Singular values:")
print(s)
print()

# Rank-1 approximation
k = 1
Sigma_k = np.zeros((k, k))
Sigma_k[:k, :k] = np.diag(s[:k])

A_k = U[:, :k] @ Sigma_k @ VT[:k, :]

print(f"Rank-{k} approximation:")
print(A_k)
print()

# Compute approximation error
error_fro = np.linalg.norm(A - A_k, 'fro')
print(f"Frobenius norm error: {error_fro:.4f}")
print()

# Compare with different ranks
print("Approximation quality:")
for k in range(1, len(s) + 1):
    A_k = U[:, :k] @ np.diag(s[:k]) @ VT[:k, :]
    error = np.linalg.norm(A - A_k, 'fro')
    var_explained = (s[:k]**2).sum() / (s**2).sum()
    print(f"Rank {k}: Error={error:.4f}, Variance explained={var_explained*100:.2f}%")`}
        />

        <PythonEditor
          title="Image Compression with SVD"
          initialCode={`import numpy as np

# Simulate a small "image" (grayscale)
np.random.seed(42)
# Create an image with some structure
x = np.linspace(0, 10, 50)
y = np.linspace(0, 10, 50)
X, Y = np.meshgrid(x, y)
image = np.sin(X) * np.cos(Y) + 0.1 * np.random.randn(50, 50)

print(f"Image shape: {image.shape}")
print(f"Original size: {image.size} values")
print()

# Compute SVD
U, s, VT = np.linalg.svd(image, full_matrices=False)

print("Singular values (first 10):")
print(s[:10])
print()

# Try different compression levels
compression_levels = [1, 5, 10, 20]

for k in range(1, min(compression_levels[-1] + 1, len(s) + 1)):
    # Reconstruct with k components
    image_compressed = U[:, :k] @ np.diag(s[:k]) @ VT[:k, :]

    # Compression ratio
    original_size = image.size
    compressed_size = k * (U.shape[0] + VT.shape[1] + 1)  # U[:,:k] + V[:k,:] + s[:k]

    # Quality metrics
    mse = np.mean((image - image_compressed)**2)
    var_explained = (s[:k]**2).sum() / (s**2).sum()

    if k in compression_levels:
        print(f"\\nRank-{k} approximation:")
        print(f"  Compression ratio: {original_size}/{compressed_size} = {original_size/compressed_size:.2f}x")
        print(f"  MSE: {mse:.6f}")
        print(f"  Variance explained: {var_explained*100:.2f}%")`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="If A is a 4×3 matrix, what are the dimensions of U, Σ, and V^T in its SVD?"
          hint="Remember U is m×m, Σ is m×n, and V^T is n×n"
          solution={`For A ∈ R^(4×3):

U ∈ R^(4×4)   (left singular vectors, square)
Σ ∈ R^(4×3)   (same shape as A, diagonal)
V^T ∈ R^(3×3) (right singular vectors transposed, square)

Note: Σ looks like:
[σ₁  0   0 ]
[ 0  σ₂  0 ]
[ 0   0  σ₃]
[ 0   0   0 ]`}
        />

        <Exercise
          problem="What is the rank of a matrix with singular values [5, 3, 0, 0]?"
          hint="Rank equals number of non-zero singular values"
          solution={`The rank equals the number of non-zero singular values.

Since we have 2 non-zero singular values (5 and 3), the rank is 2.`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="SVD Quiz"
          questions={[
            {
              question: 'In the SVD A = UΣV^T, which matrices are orthogonal?',
              options: [
                'Only U',
                'Only V',
                'Both U and V',
                'Only Σ'
              ],
              correctAnswer: 2,
              explanation: 'Both U and V are orthogonal matrices (U^T U = I and V^T V = I).'
            },
            {
              question: 'What do singular values represent?',
              options: [
                'Eigenvalues of A',
                'Diagonal entries of A',
                'Square roots of eigenvalues of A^T A',
                'Determinants'
              ],
              correctAnswer: 2,
              explanation: 'Singular values are σᵢ = √λᵢ where λᵢ are eigenvalues of A^T A.'
            },
            {
              question: 'The best rank-k approximation using SVD minimizes which error?',
              options: [
                'Element-wise error',
                'Frobenius norm error',
                'Maximum absolute error',
                'Sum of squares'
              ],
              correctAnswer: 1,
              explanation: 'SVD truncation gives the optimal rank-k approximation in both Frobenius and spectral (2-norm) norms.'
            },
            {
              question: 'How is SVD related to PCA?',
              options: [
                'They are unrelated',
                'SVD of centered data gives PCA',
                'PCA is faster than SVD',
                'PCA requires SVD of covariance matrix'
              ],
              correctAnswer: 1,
              explanation: 'SVD of the centered data matrix directly gives principal components (right singular vectors) without forming the covariance matrix.'
            }
          ]}
        />
      </Section>

      <Section title="Applications in Machine Learning" id="ml">
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Recommender Systems
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Netflix Prize used SVD for matrix completion: decompose user-item rating matrix into
              latent factors. Missing ratings are predicted from low-rank approximation.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Latent Semantic Analysis (LSA)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              SVD of document-term matrix discovers latent topics. Used in NLP for finding semantic
              similarity between documents.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Image Compression
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Store only top-k singular values and vectors instead of full image. Trade-off between
              compression ratio and quality.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              PCA via SVD
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              More numerically stable than eigendecomposition of covariance matrix. Directly get
              principal components from right singular vectors.
            </p>
          </div>
        </div>

        <PythonEditor
          title="ML Application: Collaborative Filtering"
          initialCode={`import numpy as np

# Simulate user-item rating matrix (users × movies)
# 0 means no rating (missing)
np.random.seed(42)
ratings = np.array([
    [5, 3, 0, 1, 0],  # User 1
    [4, 0, 0, 1, 0],  # User 2
    [1, 1, 0, 5, 0],  # User 3
    [1, 0, 0, 4, 0],  # User 4
    [0, 1, 5, 4, 0],  # User 5
], dtype=float)

print("Original ratings (0 = missing):")
print(ratings)
print()

# Replace 0s with mean for SVD (simple approach)
ratings_filled = ratings.copy()
for i in range(ratings.shape[1]):
    col = ratings[:, i]
    col_mean = col[col > 0].mean() if (col > 0).any() else 0
    ratings_filled[col == 0, i] = col_mean

print("Filled ratings:")
print(ratings_filled)
print()

# Compute SVD
U, s, VT = np.linalg.svd(ratings_filled, full_matrices=False)

print("Singular values:")
print(s)
print()

# Low-rank approximation (k=2)
k = 2
ratings_approx = U[:, :k] @ np.diag(s[:k]) @ VT[:k, :]

print(f"Rank-{k} approximation (predicted ratings):")
print(ratings_approx)
print()

# Predict missing ratings
print("\\nPredicted missing ratings:")
for i in range(ratings.shape[0]):
    for j in range(ratings.shape[1]):
        if ratings[i, j] == 0:
            print(f"User {i+1}, Movie {j+1}: {ratings_approx[i, j]:.2f}")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• SVD decomposes any matrix: A = UΣV^T</li>
          <li>• U and V are orthogonal, Σ contains singular values</li>
          <li>• Rank-k truncation gives optimal low-rank approximation</li>
          <li>• Singular values = √(eigenvalues of A^T A)</li>
          <li>• Critical for: recommender systems, LSA, image compression, PCA</li>
        </ul>
      </div>
    </div>
  )
}
