import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function MatricesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 2: Matrices
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Matrices are rectangular arrays of numbers that are fundamental to linear algebra. They
          represent linear transformations, systems of equations, and data structures in machine learning.
        </p>

        <Definition title="Matrix">
          <p className="mb-2">
            An <InlineMathBlock>{'m \\times n'}</InlineMathBlock> <strong>matrix</strong> is a
            rectangular array of numbers with <InlineMathBlock>{'m'}</InlineMathBlock> rows and{' '}
            <InlineMathBlock>{'n'}</InlineMathBlock> columns:
          </p>
          <MathBlock>
            {`A = \\begin{bmatrix}
a_{11} & a_{12} & \\cdots & a_{1n} \\\\
a_{21} & a_{22} & \\cdots & a_{2n} \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{bmatrix}`}
          </MathBlock>
          <p className="mt-2">
            We write <InlineMathBlock>{'A \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock> and
            denote the entry in row <InlineMathBlock>{'i'}</InlineMathBlock> and column{' '}
            <InlineMathBlock>{'j'}</InlineMathBlock> as <InlineMathBlock>{'a_{ij}'}</InlineMathBlock> or{' '}
            <InlineMathBlock>{'A[i,j]'}</InlineMathBlock>.
          </p>
        </Definition>

        <Example title="Example Matrices">
          <p className="mb-2">A <InlineMathBlock>{'2 \\times 3'}</InlineMathBlock> matrix:</p>
          <MathBlock>
            {`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}`}
          </MathBlock>
          <p className="my-2">A <InlineMathBlock>{'3 \\times 3'}</InlineMathBlock> square matrix:</p>
          <MathBlock>
            {`B = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 3 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix}`}
          </MathBlock>
        </Example>
      </Section>

      <Section title="Matrix Operations" id="operations">
        <SubSection title="Matrix Addition">
          <Definition title="Matrix Addition">
            <p className="mb-2">
              Matrices <InlineMathBlock>{'A, B \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock> can be
              added element-wise:
            </p>
            <MathBlock>
              {`(A + B)_{ij} = A_{ij} + B_{ij}`}
            </MathBlock>
          </Definition>

          <Note>
            Only matrices of the <strong>same dimensions</strong> can be added.
          </Note>

          <Example title="Matrix Addition">
            <MathBlock>
              {`\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}`}
            </MathBlock>
          </Example>
        </SubSection>

        <SubSection title="Scalar Multiplication">
          <Definition title="Scalar Multiplication">
            <p className="mb-2">
              For scalar <InlineMathBlock>{'c \\in \\mathbb{R}'}</InlineMathBlock> and matrix{' '}
              <InlineMathBlock>{'A \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock>:
            </p>
            <MathBlock>
              {`(cA)_{ij} = c \\cdot A_{ij}`}
            </MathBlock>
          </Definition>

          <Example title="Scalar Multiplication">
            <MathBlock>
              {`3 \\begin{bmatrix} 1 & 2 \\\\ -1 & 4 \\end{bmatrix} = \\begin{bmatrix} 3 & 6 \\\\ -3 & 12 \\end{bmatrix}`}
            </MathBlock>
          </Example>
        </SubSection>

        <SubSection title="Matrix Multiplication">
          <Definition title="Matrix Multiplication">
            <p className="mb-2">
              For <InlineMathBlock>{'A \\in \\mathbb{R}^{m \\times n}'}</InlineMathBlock> and{' '}
              <InlineMathBlock>{'B \\in \\mathbb{R}^{n \\times p}'}</InlineMathBlock>, the product{' '}
              <InlineMathBlock>{'C = AB'}</InlineMathBlock> is an{' '}
              <InlineMathBlock>{'m \\times p'}</InlineMathBlock> matrix where:
            </p>
            <MathBlock>
              {`C_{ij} = \\sum_{k=1}^n A_{ik}B_{kj}`}
            </MathBlock>
            <p className="mt-2">
              Each entry <InlineMathBlock>{'C_{ij}'}</InlineMathBlock> is the dot product of row{' '}
              <InlineMathBlock>{'i'}</InlineMathBlock> of <InlineMathBlock>{'A'}</InlineMathBlock> with
              column <InlineMathBlock>{'j'}</InlineMathBlock> of <InlineMathBlock>{'B'}</InlineMathBlock>.
            </p>
          </Definition>

          <Note>
            <strong>Important:</strong> For <InlineMathBlock>{'AB'}</InlineMathBlock> to be defined,
            the number of columns in <InlineMathBlock>{'A'}</InlineMathBlock> must equal the number
            of rows in <InlineMathBlock>{'B'}</InlineMathBlock>.
          </Note>

          <Example title="Matrix Multiplication">
            <MathBlock>
              {`\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 1(5)+2(7) & 1(6)+2(8) \\\\ 3(5)+4(7) & 3(6)+4(8) \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}`}
            </MathBlock>
          </Example>

          <Note>
            Matrix multiplication is <strong>not commutative</strong>: generally{' '}
            <InlineMathBlock>{'AB \\neq BA'}</InlineMathBlock>. However, it is <strong>associative</strong>:{' '}
            <InlineMathBlock>{'(AB)C = A(BC)'}</InlineMathBlock>.
          </Note>
        </SubSection>

        <SubSection title="Matrix Transpose">
          <Definition title="Transpose">
            <p className="mb-2">
              The <strong>transpose</strong> of an{' '}
              <InlineMathBlock>{'m \\times n'}</InlineMathBlock> matrix{' '}
              <InlineMathBlock>{'A'}</InlineMathBlock> is the{' '}
              <InlineMathBlock>{'n \\times m'}</InlineMathBlock> matrix{' '}
              <InlineMathBlock>{'A^T'}</InlineMathBlock> where:
            </p>
            <MathBlock>
              {`(A^T)_{ij} = A_{ji}`}
            </MathBlock>
            <p className="mt-2">Rows become columns and columns become rows.</p>
          </Definition>

          <Example title="Transpose">
            <MathBlock>
              {`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix} \\implies A^T = \\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}`}
            </MathBlock>
          </Example>

          <Theorem title="Properties of Transpose">
            <ul className="list-disc ml-6 space-y-1">
              <li><InlineMathBlock>{'(A^T)^T = A'}</InlineMathBlock></li>
              <li><InlineMathBlock>{'(A + B)^T = A^T + B^T'}</InlineMathBlock></li>
              <li><InlineMathBlock>{'(cA)^T = cA^T'}</InlineMathBlock></li>
              <li><InlineMathBlock>{'(AB)^T = B^T A^T'}</InlineMathBlock> (order reverses!)</li>
            </ul>
          </Theorem>
        </SubSection>
      </Section>

      <Section title="Special Matrices" id="special">
        <SubSection title="Identity Matrix">
          <Definition title="Identity Matrix">
            <p className="mb-2">
              The <InlineMathBlock>{'n \\times n'}</InlineMathBlock> <strong>identity matrix</strong>{' '}
              <InlineMathBlock>{'I_n'}</InlineMathBlock> has 1s on the diagonal and 0s elsewhere:
            </p>
            <MathBlock>
              {`I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}`}
            </MathBlock>
            <p className="mt-2">
              Property: <InlineMathBlock>{'AI_n = I_mA = A'}</InlineMathBlock>
            </p>
          </Definition>
        </SubSection>

        <SubSection title="Diagonal Matrix">
          <Definition title="Diagonal Matrix">
            <p className="mb-2">
              A matrix is <strong>diagonal</strong> if all off-diagonal entries are zero:
            </p>
            <MathBlock>
              {`D = \\begin{bmatrix} d_1 & 0 & \\cdots & 0 \\\\ 0 & d_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & d_n \\end{bmatrix}`}
            </MathBlock>
          </Definition>

          <Note>
            Diagonal matrices are computationally efficient: multiplication takes{' '}
            <InlineMathBlock>{'O(n)'}</InlineMathBlock> instead of <InlineMathBlock>{'O(n^3)'}</InlineMathBlock>.
          </Note>
        </SubSection>

        <SubSection title="Symmetric Matrix">
          <Definition title="Symmetric Matrix">
            <p className="mb-2">
              A matrix <InlineMathBlock>{'A'}</InlineMathBlock> is <strong>symmetric</strong> if{' '}
              <InlineMathBlock>{'A = A^T'}</InlineMathBlock>, i.e.,{' '}
              <InlineMathBlock>{'A_{ij} = A_{ji}'}</InlineMathBlock> for all{' '}
              <InlineMathBlock>{'i, j'}</InlineMathBlock>.
            </p>
            <MathBlock>
              {`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 3 & 5 & 6 \\end{bmatrix}`}
            </MathBlock>
          </Definition>

          <Note>
            Symmetric matrices arise frequently in ML: covariance matrices, kernel matrices,
            adjacency matrices of undirected graphs.
          </Note>
        </SubSection>

        <SubSection title="Orthogonal Matrix">
          <Definition title="Orthogonal Matrix">
            <p className="mb-2">
              A square matrix <InlineMathBlock>{'Q'}</InlineMathBlock> is <strong>orthogonal</strong> if:
            </p>
            <MathBlock>
              {`Q^T Q = QQ^T = I`}
            </MathBlock>
            <p className="mt-2">
              Equivalently: <InlineMathBlock>{'Q^{-1} = Q^T'}</InlineMathBlock>
            </p>
          </Definition>

          <Note>
            Orthogonal matrices preserve lengths and angles. They represent rotations and reflections.
          </Note>
        </SubSection>
      </Section>

      <Section title="Matrix Inverse" id="inverse">
        <Definition title="Inverse Matrix">
          <p className="mb-2">
            A square matrix <InlineMathBlock>{'A'}</InlineMathBlock> is <strong>invertible</strong>{' '}
            (or <strong>non-singular</strong>) if there exists a matrix{' '}
            <InlineMathBlock>{'A^{-1}'}</InlineMathBlock> such that:
          </p>
          <MathBlock>
            {`AA^{-1} = A^{-1}A = I`}
          </MathBlock>
        </Definition>

        <Theorem title="Properties of Inverse">
          <ul className="list-disc ml-6 space-y-1">
            <li><InlineMathBlock>{'(A^{-1})^{-1} = A'}</InlineMathBlock></li>
            <li><InlineMathBlock>{'(AB)^{-1} = B^{-1}A^{-1}'}</InlineMathBlock> (order reverses!)</li>
            <li><InlineMathBlock>{'(A^T)^{-1} = (A^{-1})^T'}</InlineMathBlock></li>
          </ul>
        </Theorem>

        <Example title="2×2 Matrix Inverse">
          <p className="mb-2">
            For a <InlineMathBlock>{'2 \\times 2'}</InlineMathBlock> matrix:
          </p>
          <MathBlock>
            {`A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}, \\quad A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}`}
          </MathBlock>
          <p className="mt-2">
            The scalar <InlineMathBlock>{'ad - bc'}</InlineMathBlock> is called the <strong>determinant</strong>.
            If <InlineMathBlock>{'\\det(A) = 0'}</InlineMathBlock>, the matrix is not invertible.
          </p>
        </Example>

        <Example title="Computing an Inverse">
          <MathBlock>
            {`A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}`}
          </MathBlock>
          <p className="mb-2">
            <InlineMathBlock>{'\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2'}</InlineMathBlock>
          </p>
          <MathBlock>
            {`A^{-1} = \\frac{1}{-2} \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}`}
          </MathBlock>
        </Example>
      </Section>

      <Section title="Python Implementation" id="python">
        <PythonEditor
          title="Matrix Operations with NumPy"
          initialCode={`import numpy as np

# Create matrices
A = np.array([[1, 2, 3],
              [4, 5, 6]])

B = np.array([[1, 2],
              [3, 4],
              [5, 6]])

print("Matrix A (2×3):")
print(A)
print("\\nMatrix B (3×2):")
print(B)
print()

# Matrix multiplication
C = A @ B  # or np.dot(A, B)
print("A @ B =")
print(C)
print()

# Transpose
print("A^T =")
print(A.T)
print()

# Element-wise operations
D = np.array([[1, 2, 3],
              [4, 5, 6]])
print("A + D =")
print(A + D)
print()

print("3 * A =")
print(3 * A)`}
        />

        <PythonEditor
          title="Matrix Inverse and Special Matrices"
          initialCode={`import numpy as np

# Create a square matrix
A = np.array([[1, 2],
              [3, 4]])

print("Matrix A:")
print(A)
print()

# Compute inverse
A_inv = np.linalg.inv(A)
print("A^(-1) =")
print(A_inv)
print()

# Verify AA^(-1) = I
print("A @ A^(-1) =")
print(A @ A_inv)
print()

# Determinant
det_A = np.linalg.det(A)
print(f"det(A) = {det_A}")
print()

# Identity matrix
I = np.eye(3)
print("3×3 Identity matrix:")
print(I)
print()

# Diagonal matrix
D = np.diag([1, 2, 3, 4])
print("Diagonal matrix:")
print(D)
print()

# Check if symmetric
B = np.array([[1, 2, 3],
              [2, 4, 5],
              [3, 5, 6]])
is_symmetric = np.allclose(B, B.T)
print("Matrix B:")
print(B)
print(f"Is B symmetric? {is_symmetric}")`}
        />

        <PythonEditor
          title="Matrix Operations on Data"
          initialCode={`import numpy as np

# Simulate a dataset: 5 samples, 3 features
X = np.array([[1.0, 2.0, 3.0],
              [4.0, 5.0, 6.0],
              [7.0, 8.0, 9.0],
              [2.0, 3.0, 4.0],
              [5.0, 6.0, 7.0]])

print("Data matrix X (5 samples × 3 features):")
print(X)
print()

# Center the data (subtract mean)
mean = np.mean(X, axis=0)
X_centered = X - mean
print("Mean of each feature:", mean)
print("\\nCentered data:")
print(X_centered)
print()

# Compute covariance matrix
# Cov = (X^T X) / (n-1)
n = X_centered.shape[0]
cov_matrix = (X_centered.T @ X_centered) / (n - 1)
print("Covariance matrix (3×3):")
print(cov_matrix)
print()

# Verify symmetry
print("Is covariance matrix symmetric?", np.allclose(cov_matrix, cov_matrix.T))
print()

# Correlation matrix
std_dev = np.std(X, axis=0)
X_standardized = X_centered / std_dev
corr_matrix = (X_standardized.T @ X_standardized) / (n - 1)
print("Correlation matrix:")
print(corr_matrix)`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Given A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]], compute:
a) AB
b) BA
c) (AB)^T
d) B^T A^T"
          hint="Remember that (AB)^T = B^T A^T"
          solution={`a) AB = [[1(5)+2(7), 1(6)+2(8)],
         [3(5)+4(7), 3(6)+4(8)]]
      = [[19, 22],
         [43, 50]]

b) BA = [[5(1)+6(3), 5(2)+6(4)],
         [7(1)+8(3), 7(2)+8(4)]]
      = [[23, 34],
         [31, 46]]

Note: AB ≠ BA (matrix multiplication is not commutative)

c) (AB)^T = [[19, 43],
             [22, 50]]

d) B^T A^T = [[5, 7],    [[1, 3],
              [6, 8]]  @  [2, 4]]
            = [[19, 43],
               [22, 50]]

Verification: (AB)^T = B^T A^T ✓`}
        />

        <Exercise
          problem="Find the inverse of A = [[2, 1], [5, 3]]"
          hint="Use the formula for 2×2 inverse: (1/det(A)) * [[d, -b], [-c, a]]"
          solution={`det(A) = (2)(3) - (1)(5) = 6 - 5 = 1

A^(-1) = (1/1) * [[3, -1],
                  [-5, 2]]
       = [[3, -1],
          [-5, 2]]

Verification:
A @ A^(-1) = [[2, 1],    [[3, -1],
              [5, 3]]  @  [-5, 2]]
            = [[2(3)+1(-5), 2(-1)+1(2)],
               [5(3)+3(-5), 5(-1)+3(2)]]
            = [[1, 0],
               [0, 1]] = I ✓`}
        />

        <Exercise
          problem="Prove that if A is invertible, then (A^T)^(-1) = (A^(-1))^T"
          hint="Show that A^T times (A^(-1))^T equals the identity."
          solution={`Proof:
We need to show that A^T (A^(-1))^T = I

Consider:
A^T (A^(-1))^T = (A^(-1) A)^T    (using (AB)^T = B^T A^T)
                = I^T
                = I

Similarly:
(A^(-1))^T A^T = (A A^(-1))^T = I^T = I

Therefore, (A^(-1))^T is the inverse of A^T, i.e.,
(A^T)^(-1) = (A^(-1))^T  ∎`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Matrices Quiz"
          questions={[
            {
              question: 'What is the dimension of the product AB if A is 3×4 and B is 4×2?',
              options: ['3×2', '4×4', '3×4', 'Undefined'],
              correctAnswer: 0,
              explanation: 'For matrix multiplication AB, if A is m×n and B is n×p, then AB is m×p. Here: 3×2.'
            },
            {
              question: 'Which property does NOT hold for matrix multiplication?',
              options: ['Associative', 'Commutative', 'Distributive', 'Compatible with scalar mult.'],
              correctAnswer: 1,
              explanation: 'Matrix multiplication is NOT commutative: generally AB ≠ BA. However, it is associative and distributive.'
            },
            {
              question: 'If A is a 4×3 matrix, what is the dimension of A^T?',
              options: ['4×3', '3×4', '3×3', '4×4'],
              correctAnswer: 1,
              explanation: 'Transpose swaps rows and columns. A 4×3 matrix transposed becomes 3×4.'
            },
            {
              question: 'What is (AB)^T equal to?',
              options: ['A^T B^T', 'B^T A^T', 'AB', '(BA)^T'],
              correctAnswer: 1,
              explanation: 'The transpose of a product reverses the order: (AB)^T = B^T A^T.'
            },
            {
              question: 'A matrix is NOT invertible if:',
              options: [
                'It is symmetric',
                'Its determinant is zero',
                'It is diagonal',
                'It is square'
              ],
              correctAnswer: 1,
              explanation: 'A matrix is not invertible (singular) if and only if its determinant is zero.'
            }
          ]}
        />
      </Section>

      <Section title="Applications in Machine Learning" id="ml-applications">
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Data Representation
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              In ML, datasets are represented as matrices where each row is a data sample and
              each column is a feature. An <InlineMathBlock>{'n \\times d'}</InlineMathBlock> matrix
              represents <InlineMathBlock>{'n'}</InlineMathBlock> samples with{' '}
              <InlineMathBlock>{'d'}</InlineMathBlock> features.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Neural Network Weights
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Each layer in a neural network is a matrix multiplication:{' '}
              <InlineMathBlock>{'\\mathbf{h} = W\\mathbf{x} + \\mathbf{b}'}</InlineMathBlock>,
              where <InlineMathBlock>{'W'}</InlineMathBlock> is the weight matrix.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Covariance Matrices
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              The covariance matrix <InlineMathBlock>{'\\Sigma = \\frac{1}{n-1}X^TX'}</InlineMathBlock>{' '}
              captures relationships between features and is fundamental to PCA.
            </p>
          </div>
        </div>

        <PythonEditor
          title="ML Application: Linear Regression"
          initialCode={`import numpy as np

# Generate synthetic data: y = 2x + 1 + noise
np.random.seed(42)
n = 100
X = np.random.randn(n, 1)  # n×1 matrix
y = 2 * X + 1 + 0.1 * np.random.randn(n, 1)  # n×1 matrix

# Add bias term (column of 1s)
X_with_bias = np.hstack([np.ones((n, 1)), X])  # n×2 matrix

print(f"X_with_bias shape: {X_with_bias.shape}")
print(f"y shape: {y.shape}")
print()

# Solve linear regression using normal equation:
# w = (X^T X)^(-1) X^T y
XTX = X_with_bias.T @ X_with_bias  # 2×2 matrix
XTy = X_with_bias.T @ y            # 2×1 matrix
w = np.linalg.inv(XTX) @ XTy       # 2×1 matrix

print("Learned weights (bias, slope):")
print(w)
print()
print(f"True parameters: bias=1, slope=2")
print(f"Learned parameters: bias={w[0,0]:.4f}, slope={w[1,0]:.4f}")
print()

# Make predictions
y_pred = X_with_bias @ w

# Compute MSE
mse = np.mean((y - y_pred)**2)
print(f"Mean Squared Error: {mse:.6f}")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Matrices are rectangular arrays representing data and transformations</li>
          <li>• Key operations: addition, scalar multiplication, matrix multiplication, transpose</li>
          <li>• Matrix multiplication is associative but NOT commutative</li>
          <li>• Special matrices: identity, diagonal, symmetric, orthogonal</li>
          <li>• Invertible matrices satisfy AA⁻¹ = I</li>
          <li>• ML applications: data matrices, weight matrices, covariance matrices</li>
        </ul>
      </div>
    </div>
  )
}
