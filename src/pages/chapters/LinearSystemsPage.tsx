import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function LinearSystemsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 3: Systems of Linear Equations
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Systems of linear equations are at the heart of linear algebra. They appear in countless
          applications: from solving circuits to optimizing machine learning models.
        </p>

        <Definition title="System of Linear Equations">
          <p className="mb-2">
            A <strong>system of linear equations</strong> is a collection of linear equations:
          </p>
          <MathBlock>
            {`\\begin{align*}
a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\
a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n &= b_2 \\\\
&\\vdots \\\\
a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n &= b_m
\\end{align*}`}
          </MathBlock>
          <p className="mt-2">
            In matrix form: <InlineMathBlock>{'A\\mathbf{x} = \\mathbf{b}'}</InlineMathBlock>
          </p>
        </Definition>

        <Example title="Example System">
          <MathBlock>
            {`\\begin{align*}
2x_1 + 3x_2 &= 8 \\\\
x_1 - x_2 &= -1
\\end{align*}`}
          </MathBlock>
          <p className="mt-2">
            Matrix form:{' '}
            <InlineMathBlock>
              {'\\begin{bmatrix} 2 & 3 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ -1 \\end{bmatrix}'}
            </InlineMathBlock>
          </p>
        </Example>
      </Section>

      <Section title="Gaussian Elimination" id="gaussian">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Gaussian elimination is a systematic method for solving linear systems by transforming
          the augmented matrix into row echelon form.
        </p>

        <SubSection title="Elementary Row Operations">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Three types of operations preserve the solution:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Row swapping:</strong> Exchange two rows</li>
            <li><strong>Row scaling:</strong> Multiply a row by a non-zero scalar</li>
            <li><strong>Row addition:</strong> Add a multiple of one row to another</li>
          </ol>
        </SubSection>

        <Example title="Solving a System via Gaussian Elimination">
          <p className="mb-2">Solve:</p>
          <MathBlock>
            {`\\begin{align*}
x + 2y + z &= 2 \\\\
2x + y - z &= 8 \\\\
-x + y + 2z &= -5
\\end{align*}`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Step 1:</strong> Write augmented matrix</p>
          <MathBlock>
            {`\\left[\\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\\\
2 & 1 & -1 & 8 \\\\
-1 & 1 & 2 & -5
\\end{array}\\right]`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Step 2:</strong> Eliminate below first pivot</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            R₂ ← R₂ - 2R₁, R₃ ← R₃ + R₁
          </p>
          <MathBlock>
            {`\\left[\\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\\\
0 & -3 & -3 & 4 \\\\
0 & 3 & 3 & -3
\\end{array}\\right]`}
          </MathBlock>

          <p className="mt-3 mb-2"><strong>Step 3:</strong> Eliminate below second pivot</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">R₃ ← R₃ + R₂</p>
          <MathBlock>
            {`\\left[\\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\\\
0 & -3 & -3 & 4 \\\\
0 & 0 & 0 & 1
\\end{array}\\right]`}
          </MathBlock>

          <p className="mt-3 text-gray-700 dark:text-gray-300">
            The last row represents <InlineMathBlock>{'0 = 1'}</InlineMathBlock>, which is a
            contradiction. Therefore, this system has <strong>no solution</strong> (is inconsistent).
          </p>
        </Example>

        <Theorem title="Existence and Uniqueness">
          <p className="mb-2">For the system <InlineMathBlock>{'A\\mathbf{x} = \\mathbf{b}'}</InlineMathBlock>:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Unique solution:</strong> If <InlineMathBlock>{'A'}</InlineMathBlock> is
              square and invertible, then{' '}
              <InlineMathBlock>{'\\mathbf{x} = A^{-1}\\mathbf{b}'}</InlineMathBlock>
            </li>
            <li>
              <strong>No solution:</strong> If the system is inconsistent (contradiction in row echelon form)
            </li>
            <li>
              <strong>Infinitely many solutions:</strong> If there are free variables
            </li>
          </ul>
        </Theorem>
      </Section>

      <Section title="Matrix Solutions" id="matrix-solutions">
        <SubSection title="Solution via Matrix Inverse">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            If <InlineMathBlock>{'A'}</InlineMathBlock> is square and invertible:
          </p>
          <MathBlock>
            {`A\\mathbf{x} = \\mathbf{b} \\implies \\mathbf{x} = A^{-1}\\mathbf{b}`}
          </MathBlock>

          <Note>
            Computing <InlineMathBlock>{'A^{-1}'}</InlineMathBlock> is expensive{' '}
            (<InlineMathBlock>{'O(n^3)'}</InlineMathBlock>). In practice, we use factorizations
            like LU decomposition.
          </Note>
        </SubSection>

        <SubSection title="LU Decomposition">
          <Definition title="LU Decomposition">
            <p className="mb-2">
              A matrix <InlineMathBlock>{'A'}</InlineMathBlock> can be factored as:
            </p>
            <MathBlock>
              {`A = LU`}
            </MathBlock>
            <p className="mt-2">
              where <InlineMathBlock>{'L'}</InlineMathBlock> is lower triangular and{' '}
              <InlineMathBlock>{'U'}</InlineMathBlock> is upper triangular.
            </p>
          </Definition>

          <p className="text-gray-700 dark:text-gray-300 mt-4 mb-3">
            To solve <InlineMathBlock>{'A\\mathbf{x} = \\mathbf{b}'}</InlineMathBlock>:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Solve <InlineMathBlock>{'L\\mathbf{y} = \\mathbf{b}'}</InlineMathBlock> for{' '}
            <InlineMathBlock>{'\\mathbf{y}'}</InlineMathBlock> (forward substitution)</li>
            <li>Solve <InlineMathBlock>{'U\\mathbf{x} = \\mathbf{y}'}</InlineMathBlock> for{' '}
            <InlineMathBlock>{'\\mathbf{x}'}</InlineMathBlock> (backward substitution)</li>
          </ol>
        </SubSection>
      </Section>

      <Section title="Python Implementation" id="python">
        <PythonEditor
          title="Solving Linear Systems with NumPy"
          initialCode={`import numpy as np

# Define system: Ax = b
A = np.array([[2, 1, -1],
              [-3, -1, 2],
              [-2, 1, 2]], dtype=float)

b = np.array([8, -11, -3], dtype=float)

print("Matrix A:")
print(A)
print("\\nVector b:")
print(b)
print()

# Method 1: Using np.linalg.solve (recommended)
x = np.linalg.solve(A, b)
print("Solution using np.linalg.solve:")
print(x)
print()

# Verify solution
verification = A @ x
print("Verification (A @ x):")
print(verification)
print("Expected b:")
print(b)
print("Match?", np.allclose(verification, b))
print()

# Method 2: Using inverse (not recommended for large systems)
A_inv = np.linalg.inv(A)
x2 = A_inv @ b
print("Solution using inverse:")
print(x2)
print()

# Method 3: Using LU decomposition
from scipy.linalg import lu
P, L, U = lu(A)
print("L (lower triangular):")
print(L)
print("\\nU (upper triangular):")
print(U)
print("\\nVerify A = LU:")
print(np.allclose(A, P @ L @ U))`}
        />

        <PythonEditor
          title="Overdetermined and Underdetermined Systems"
          initialCode={`import numpy as np

# Overdetermined system (more equations than unknowns)
# No exact solution, find least squares solution
print("=== Overdetermined System ===")
A = np.array([[1, 1],
              [1, 2],
              [1, 3],
              [1, 4]])  # 4 equations, 2 unknowns

b = np.array([2, 3, 5, 6])

# Least squares solution: minimize ||Ax - b||²
x_ls = np.linalg.lstsq(A, b, rcond=None)[0]
print("Least squares solution:", x_ls)
print("Residual:", np.linalg.norm(A @ x_ls - b))
print()

# Underdetermined system (fewer equations than unknowns)
print("=== Underdetermined System ===")
A2 = np.array([[1, 2, 3],
               [4, 5, 6]])  # 2 equations, 3 unknowns

b2 = np.array([1, 2])

# Find minimum norm solution
x_min = np.linalg.lstsq(A2, b2, rcond=None)[0]
print("Minimum norm solution:", x_min)
print("Verification:", A2 @ x_min)
print("Expected:", b2)`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Solve the system using Gaussian elimination:
x + y + z = 6
2x - y + z = 3
x + 2y - z = 1"
          hint="Form the augmented matrix and perform row operations to get row echelon form."
          solution={`Augmented matrix:
[1  1  1 | 6]
[2 -1  1 | 3]
[1  2 -1 | 1]

R₂ ← R₂ - 2R₁:
[1  1  1 | 6]
[0 -3 -1 |-9]
[1  2 -1 | 1]

R₃ ← R₃ - R₁:
[1  1  1 | 6]
[0 -3 -1 |-9]
[0  1 -2 |-5]

R₃ ← R₃ + (1/3)R₂:
[1  1  1 | 6]
[0 -3 -1 |-9]
[0  0 -7/3|-8]

Back substitution:
z = 24/7
y = 3 - (1/3)(24/7) = 13/7
x = 6 - 13/7 - 24/7 = 11/7

Solution: x = 11/7, y = 13/7, z = 24/7`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Linear Systems Quiz"
          questions={[
            {
              question: 'A system Ax = b has a unique solution if and only if:',
              options: [
                'A is square',
                'A is invertible',
                'b is non-zero',
                'A is symmetric'
              ],
              correctAnswer: 1,
              explanation: 'A system has a unique solution if and only if A is square and invertible (det(A) ≠ 0).'
            },
            {
              question: 'What does it mean if a row in row echelon form is [0 0 0 | 1]?',
              options: [
                'Infinitely many solutions',
                'Unique solution',
                'No solution',
                'Need more information'
              ],
              correctAnswer: 2,
              explanation: 'This represents 0 = 1, a contradiction, so the system has no solution (is inconsistent).'
            },
            {
              question: 'The computational complexity of solving Ax = b using Gaussian elimination is:',
              options: ['O(n)', 'O(n²)', 'O(n³)', 'O(2ⁿ)'],
              correctAnswer: 2,
              explanation: 'Gaussian elimination has O(n³) complexity for an n×n system.'
            }
          ]}
        />
      </Section>

      <Section title="ML Applications" id="ml">
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-4">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
            Linear Regression
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            The normal equation for linear regression solves{' '}
            <InlineMathBlock>{'(X^TX)\\mathbf{w} = X^T\\mathbf{y}'}</InlineMathBlock> to find
            optimal weights.
          </p>
        </div>

        <PythonEditor
          title="Linear Regression via Normal Equation"
          initialCode={`import numpy as np

# Generate data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Add bias term
X_b = np.c_[np.ones((100, 1)), X]

# Normal equation: w = (X^T X)^(-1) X^T y
w_best = np.linalg.solve(X_b.T @ X_b, X_b.T @ y)

print("Optimal weights [bias, slope]:")
print(w_best.ravel())
print("\\nTrue values: bias=4, slope=3")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Linear systems can be written as Ax = b</li>
          <li>• Gaussian elimination transforms to row echelon form</li>
          <li>• Solutions: unique (invertible A), none (inconsistent), or infinitely many (free variables)</li>
          <li>• LU decomposition provides efficient solving for multiple b vectors</li>
          <li>• Normal equation solves linear regression</li>
        </ul>
      </div>
    </div>
  )
}
