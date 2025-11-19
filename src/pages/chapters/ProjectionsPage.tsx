import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import { VectorPlot2D } from '../../components/VectorPlot3D'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function ProjectionsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 10: Projections and Least Squares
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Projections are fundamental to understanding subspaces, least squares problems, and many
          ML algorithms. They answer the question: "What's the closest point in a subspace to a
          given point?" This concept underlies linear regression, PCA, and more.
        </p>
      </Section>

      <Section title="Orthogonal Projections" id="orthogonal-projections">
        <Definition title="Projection onto a Vector">
          <p className="mb-2">
            The <strong>orthogonal projection</strong> of vector{' '}
            <InlineMathBlock>{'\\mathbf{b}'}</InlineMathBlock> onto vector{' '}
            <InlineMathBlock>{'\\mathbf{a}'}</InlineMathBlock> is:
          </p>
          <MathBlock>
            {`\\text{proj}_{\\mathbf{a}}(\\mathbf{b}) = \\frac{\\mathbf{a}^T\\mathbf{b}}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{a} = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{b}`}
          </MathBlock>
          <p className="mt-2">
            This is the component of <InlineMathBlock>{'\\mathbf{b}'}</InlineMathBlock> in the
            direction of <InlineMathBlock>{'\\mathbf{a}'}</InlineMathBlock>.
          </p>
        </Definition>

        <VectorPlot2D
          vectors={[
            { x: 3, y: 1, color: '#3b82f6', label: 'a = [3, 1]' },
            { x: 2, y: 3, color: '#ef4444', label: 'b = [2, 3]' },
            { x: 2.1, y: 0.7, color: '#10b981', label: 'proj_a(b)' },
            { x: -0.1, y: 2.3, color: '#f59e0b', label: 'b - proj_a(b)' }
          ]}
          title="Projection of b onto a"
        />

        <Example title="Computing a Projection">
          <p className="mb-2">
            Project <InlineMathBlock>{'\\mathbf{b} = [2, 3]'}</InlineMathBlock> onto{' '}
            <InlineMathBlock>{'\\mathbf{a} = [3, 1]'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`\\mathbf{a}^T\\mathbf{b} = 3(2) + 1(3) = 9`}
          </MathBlock>
          <MathBlock>
            {`\\mathbf{a}^T\\mathbf{a} = 3^2 + 1^2 = 10`}
          </MathBlock>
          <MathBlock>
            {`\\text{proj}_{\\mathbf{a}}(\\mathbf{b}) = \\frac{9}{10}\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2.7 \\\\ 0.9 \\end{bmatrix}`}
          </MathBlock>
        </Example>

        <SubSection title="Projection Matrix">
          <Definition title="Projection Matrix">
            <p className="mb-2">
              The <strong>projection matrix</strong> onto the line spanned by{' '}
              <InlineMathBlock>{'\\mathbf{a}'}</InlineMathBlock> is:
            </p>
            <MathBlock>
              {`P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}`}
            </MathBlock>
            <p className="mt-2">
              Then <InlineMathBlock>{'\\text{proj}_{\\mathbf{a}}(\\mathbf{b}) = P\\mathbf{b}'}</InlineMathBlock>
            </p>
          </Definition>

          <Theorem title="Properties of Projection Matrices">
            <ul className="list-disc ml-6 space-y-1">
              <li><InlineMathBlock>{'P^2 = P'}</InlineMathBlock> (idempotent: projecting twice = projecting once)</li>
              <li><InlineMathBlock>{'P^T = P'}</InlineMathBlock> (symmetric)</li>
              <li>Eigenvalues are 0 and 1</li>
              <li><InlineMathBlock>{'\\text{rank}(P) = \\dim(\\text{range}(P))'}</InlineMathBlock></li>
            </ul>
          </Theorem>
        </SubSection>
      </Section>

      <Section title="Projection onto Subspaces" id="subspace-projection">
        <Definition title="Projection onto Column Space">
          <p className="mb-2">
            The projection of <InlineMathBlock>{'\\mathbf{b}'}</InlineMathBlock> onto the column
            space of <InlineMathBlock>{'A'}</InlineMathBlock> (denoted <InlineMathBlock>{'\\mathcal{C}(A)'}</InlineMathBlock>) is:
          </p>
          <MathBlock>
            {`\\text{proj}_{\\mathcal{C}(A)}(\\mathbf{b}) = A(A^TA)^{-1}A^T\\mathbf{b} = P\\mathbf{b}`}
          </MathBlock>
          <p className="mt-2">
            where <InlineMathBlock>{'P = A(A^TA)^{-1}A^T'}</InlineMathBlock> is the projection matrix.
          </p>
        </Definition>

        <Note>
          <strong>Key Insight:</strong> The projection <InlineMathBlock>{'P\\mathbf{b}'}</InlineMathBlock>{' '}
          is the closest point in <InlineMathBlock>{'\\mathcal{C}(A)'}</InlineMathBlock> to{' '}
          <InlineMathBlock>{'\\mathbf{b}'}</InlineMathBlock>. The error vector{' '}
          <InlineMathBlock>{'\\mathbf{b} - P\\mathbf{b}'}</InlineMathBlock> is orthogonal to{' '}
          <InlineMathBlock>{'\\mathcal{C}(A)'}</InlineMathBlock>.
        </Note>

        <Theorem title="Normal Equation">
          <p className="mb-2">
            The projection <InlineMathBlock>{'\\hat{\\mathbf{x}}'}</InlineMathBlock> that minimizes{' '}
            <InlineMathBlock>{'\\|A\\mathbf{x} - \\mathbf{b}\\|^2'}</InlineMathBlock> satisfies:
          </p>
          <MathBlock>
            {`A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}`}
          </MathBlock>
          <p className="mt-2">This is the <strong>normal equation</strong>.</p>
        </Theorem>
      </Section>

      <Section title="Least Squares" id="least-squares">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When <InlineMathBlock>{'A\\mathbf{x} = \\mathbf{b}'}</InlineMathBlock> has no exact solution
          (overdetermined system), least squares finds the <strong>best approximate solution</strong>{' '}
          by minimizing the residual <InlineMathBlock>{'\\|A\\mathbf{x} - \\mathbf{b}\\|^2'}</InlineMathBlock>.
        </p>

        <Definition title="Least Squares Solution">
          <p className="mb-2">
            The <strong>least squares solution</strong> <InlineMathBlock>{'\\hat{\\mathbf{x}}'}</InlineMathBlock>{' '}
            satisfies:
          </p>
          <MathBlock>
            {`\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}`}
          </MathBlock>
          <p className="mt-2">
            This minimizes <InlineMathBlock>{'\\|A\\mathbf{x} - \\mathbf{b}\\|^2'}</InlineMathBlock> over all{' '}
            <InlineMathBlock>{'\\mathbf{x}'}</InlineMathBlock>.
          </p>
        </Definition>

        <Example title="Linear Regression as Least Squares">
          <p className="mb-3">
            Fit a line <InlineMathBlock>{'y = c + dx'}</InlineMathBlock> to data points{' '}
            <InlineMathBlock>{'(x_i, y_i)'}</InlineMathBlock>:
          </p>
          <p className="mb-2">Set up the system:</p>
          <MathBlock>
            {`\\begin{bmatrix}
1 & x_1 \\\\
1 & x_2 \\\\
\\vdots & \\vdots \\\\
1 & x_n
\\end{bmatrix}
\\begin{bmatrix}
c \\\\ d
\\end{bmatrix}
=
\\begin{bmatrix}
y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_n
\\end{bmatrix}`}
          </MathBlock>
          <p className="mt-3">
            This is <InlineMathBlock>{'A\\mathbf{x} = \\mathbf{b}'}</InlineMathBlock>. The least squares
            solution gives the best-fit line!
          </p>
        </Example>

        <PythonEditor
          title="Least Squares Linear Regression"
          initialCode={`import numpy as np

# Generate noisy data: y = 2x + 1 + noise
np.random.seed(42)
n = 50
x_data = np.linspace(0, 5, n)
y_data = 2 * x_data + 1 + 0.8 * np.random.randn(n)

# Set up least squares problem
# Design matrix: [1, x]
A = np.column_stack([np.ones(n), x_data])
b = y_data

print("Design matrix A shape:", A.shape)
print("Target vector b shape:", b.shape)
print()

# Method 1: Normal equation (A^T A) x = A^T b
ATA = A.T @ A
ATb = A.T @ b
x_normal = np.linalg.solve(ATA, ATb)

print("=== Normal Equation ===")
print(f"Best fit: y = {x_normal[0]:.4f} + {x_normal[1]:.4f}x")
print(f"True line: y = 1.0000 + 2.0000x")
print()

# Method 2: Using numpy's lstsq (more numerically stable)
x_lstsq = np.linalg.lstsq(A, b, rcond=None)[0]

print("=== NumPy lstsq ===")
print(f"Best fit: y = {x_lstsq[0]:.4f} + {x_lstsq[1]:.4f}x")
print()

# Compute residuals
y_pred = A @ x_normal
residuals = b - y_pred

print("=== Quality Metrics ===")
print(f"Residual norm: {np.linalg.norm(residuals):.4f}")
print(f"Mean squared error: {np.mean(residuals**2):.4f}")

# R² score
ss_res = np.sum(residuals**2)
ss_tot = np.sum((b - np.mean(b))**2)
r_squared = 1 - (ss_res / ss_tot)
print(f"R² score: {r_squared:.4f}")

# Visualize fit quality
print(f"\\nFirst 5 predictions vs actual:")
for i in range(5):
    print(f"x={x_data[i]:.2f}: predicted={y_pred[i]:.2f}, actual={y_data[i]:.2f}")`}
        />

        <SubSection title="Weighted Least Squares">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            When data points have different reliabilities, use weighted least squares:
          </p>
          <MathBlock>
            {`\\min_{\\mathbf{x}} \\|W^{1/2}(A\\mathbf{x} - \\mathbf{b})\\|^2`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            where <InlineMathBlock>{'W'}</InlineMathBlock> is a diagonal weight matrix.
          </p>
          <MathBlock>
            {`\\hat{\\mathbf{x}} = (A^TWA)^{-1}A^TW\\mathbf{b}`}
          </MathBlock>
        </SubSection>
      </Section>

      <Section title="QR Factorization for Least Squares" id="qr-least-squares">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The QR factorization provides a more numerically stable way to solve least squares than
          forming <InlineMathBlock>{'A^TA'}</InlineMathBlock>.
        </p>

        <Theorem title="Least Squares via QR">
          <p className="mb-2">
            If <InlineMathBlock>{'A = QR'}</InlineMathBlock>, then:
          </p>
          <MathBlock>
            {`\\hat{\\mathbf{x}} = R^{-1}Q^T\\mathbf{b}`}
          </MathBlock>
          <p className="mt-2">
            Since <InlineMathBlock>{'Q^TQ = I'}</InlineMathBlock>, this avoids squaring the
            condition number.
          </p>
        </Theorem>

        <PythonEditor
          title="Least Squares: Normal Equation vs QR"
          initialCode={`import numpy as np

# Generate ill-conditioned problem
np.random.seed(42)
n, m = 100, 5

# Create A with large condition number
A = np.random.randn(n, m)
A[:, 1] = A[:, 0] + 1e-6 * np.random.randn(n)  # Nearly dependent columns

b = np.random.randn(n)

print(f"Matrix shape: {A.shape}")
print(f"Condition number: {np.linalg.cond(A):.2e}")
print()

# Method 1: Normal equation
print("=== Normal Equation ===")
ATA = A.T @ A
print(f"Condition number of A^T A: {np.linalg.cond(ATA):.2e}")
x_normal = np.linalg.solve(ATA, A.T @ b)

# Method 2: QR factorization
print("\\n=== QR Factorization ===")
Q, R = np.linalg.qr(A)
x_qr = np.linalg.solve(R, Q.T @ b)

# Method 3: NumPy's lstsq (uses SVD internally)
print("\\n=== NumPy lstsq (SVD) ===")
x_lstsq = np.linalg.lstsq(A, b, rcond=None)[0]

# Compare solutions
print("\\n=== Solution Comparison ===")
print(f"||x_normal - x_lstsq||: {np.linalg.norm(x_normal - x_lstsq):.2e}")
print(f"||x_qr - x_lstsq||: {np.linalg.norm(x_qr - x_lstsq):.2e}")

# Compare residuals
res_normal = np.linalg.norm(A @ x_normal - b)
res_qr = np.linalg.norm(A @ x_qr - b)
res_lstsq = np.linalg.norm(A @ x_lstsq - b)

print("\\n=== Residual Norms ===")
print(f"Normal equation: {res_normal:.6f}")
print(f"QR factorization: {res_qr:.6f}")
print(f"SVD (lstsq): {res_lstsq:.6f}")

print("\\nQR and SVD methods are more numerically stable!")`}
        />
      </Section>

      <Section title="Applications" id="applications">
        <SubSection title="Polynomial Fitting">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Fit a polynomial <InlineMathBlock>{'p(x) = c_0 + c_1x + c_2x^2 + \\cdots + c_dx^d'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`A = \\begin{bmatrix}
1 & x_1 & x_1^2 & \\cdots & x_1^d \\\\
1 & x_2 & x_2^2 & \\cdots & x_2^d \\\\
\\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\
1 & x_n & x_n^2 & \\cdots & x_n^d
\\end{bmatrix}`}
          </MathBlock>
        </SubSection>

        <PythonEditor
          title="Polynomial Fitting"
          initialCode={`import numpy as np

# Generate data from a cubic polynomial with noise
np.random.seed(42)
x = np.linspace(-3, 3, 50)
y_true = 0.5 * x**3 - 2 * x**2 + x + 3
y_noisy = y_true + 2 * np.random.randn(50)

# Fit polynomials of different degrees
degrees = [1, 2, 3, 5, 10]

print("Polynomial Fitting")
print("=" * 50)

for degree in degrees:
    # Create design matrix [1, x, x^2, ..., x^d]
    A = np.vander(x, degree + 1, increasing=True)

    # Solve least squares
    coeffs = np.linalg.lstsq(A, y_noisy, rcond=None)[0]

    # Compute predictions and error
    y_pred = A @ coeffs
    mse = np.mean((y_noisy - y_pred)**2)

    print(f"\\nDegree {degree}:")
    print(f"  Coefficients: {coeffs}")
    print(f"  MSE: {mse:.4f}")

    # Check overfitting
    if degree >= 3:
        true_coeffs = np.array([3, 1, -2, 0.5] + [0]*(degree-3))
        coeff_error = np.linalg.norm(coeffs - true_coeffs)
        print(f"  Coefficient error: {coeff_error:.4f}")

print("\\nNote: Higher degrees fit training data better but may overfit!")`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Show that P = aa^T / (a^T a) is idempotent: P² = P"
          hint="Compute P² by matrix multiplication and use associativity"
          solution={`P² = (aa^T / (a^T a)) · (aa^T / (a^T a))
   = aa^T aa^T / (a^T a)²
   = a(a^T a)a^T / (a^T a)²    (associativity)
   = aa^T / (a^T a)
   = P  ✓`}
        />

        <Exercise
          problem="Find the least squares solution to: x - y = 1, x + y = 2, 2x + y = 3"
          hint="Set up Ax = b and solve using normal equation"
          solution={`A = [1  -1]    b = [1]
    [1   1]        [2]
    [2   1]        [3]

A^T A = [1 1 2] [1  -1]  = [6  2]
        [-1 1 1] [1   1]    [2  3]
                 [2   1]

A^T b = [1 1 2] [1]  = [9]
        [-1 1 1] [2]    [4]
                 [3]

Solve [6  2][x] = [9]
      [2  3][y]   [4]

=> x = 1.214, y = 0.786

Residual: ||Ax - b|| = 0.524`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Projections & Least Squares Quiz"
          questions={[
            {
              question: 'A projection matrix P satisfies:',
              options: ['P² = I', 'P² = P', 'P² = 0', 'P⁻¹ = P'],
              correctAnswer: 1,
              explanation: 'Projection matrices are idempotent: projecting twice is the same as projecting once, so P² = P.'
            },
            {
              question: 'The normal equation for least squares is:',
              options: ['Ax = b', 'A^T x = b', 'A^T A x = A^T b', 'AA^T x = b'],
              correctAnswer: 2,
              explanation: 'The normal equation is A^T A x = A^T b, derived from minimizing ||Ax - b||².'
            },
            {
              question: 'QR factorization is preferred over normal equations because:',
              options: [
                'It is faster',
                'It is more stable numerically',
                'It uses less memory',
                'It gives exact solutions'
              ],
              correctAnswer: 1,
              explanation: 'QR avoids forming A^T A, which squares the condition number and can cause numerical instability.'
            },
            {
              question: 'The residual vector b - Ax̂ is orthogonal to:',
              options: [
                'The vector b',
                'The solution x̂',
                'The column space of A',
                'The null space of A'
              ],
              correctAnswer: 2,
              explanation: 'The residual is orthogonal to the column space of A - this is the fundamental property of projections.'
            }
          ]}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Projection of b onto a: proj_a(b) = (a^T b / a^T a) a</li>
          <li>• Projection matrix P = A(A^T A)^(-1)A^T satisfies P² = P and P^T = P</li>
          <li>• Least squares minimizes ||Ax - b||² when no exact solution exists</li>
          <li>• Normal equation: A^T A x̂ = A^T b</li>
          <li>• QR factorization provides more stable least squares solution</li>
          <li>• Applications: linear regression, polynomial fitting, data fitting</li>
        </ul>
      </div>
    </div>
  )
}
