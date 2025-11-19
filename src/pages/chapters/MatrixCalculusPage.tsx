import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function MatrixCalculusPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 9: Matrix Calculus
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Matrix calculus is the foundation of optimization in machine learning. Understanding
          gradients, Jacobians, and Hessians is essential for training neural networks, optimizing
          models, and analyzing convergence. This chapter bridges linear algebra and calculus.
        </p>

        <Note>
          <strong>Why Matrix Calculus Matters for ML:</strong>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Gradient descent requires computing gradients efficiently</li>
            <li>Backpropagation is matrix calculus applied to neural networks</li>
            <li>Second-order optimization uses Hessians</li>
            <li>Understanding these concepts helps debug and improve models</li>
          </ul>
        </Note>
      </Section>

      <Section title="Derivatives of Scalar Functions" id="scalar-derivatives">
        <Definition title="Gradient">
          <p className="mb-2">
            For a scalar function{' '}
            <InlineMathBlock>{'f: \\mathbb{R}^n \\to \\mathbb{R}'}</InlineMathBlock>, the{' '}
            <strong>gradient</strong> is the vector of partial derivatives:
          </p>
          <MathBlock>
            {`\\nabla f(\\mathbf{x}) = \\begin{bmatrix} \\frac{\\partial f}{\\partial x_1} \\\\ \\frac{\\partial f}{\\partial x_2} \\\\ \\vdots \\\\ \\frac{\\partial f}{\\partial x_n} \\end{bmatrix}`}
          </MathBlock>
          <p className="mt-2">
            The gradient points in the direction of steepest ascent.
          </p>
        </Definition>

        <Example title="Computing Gradients">
          <p className="mb-2">
            For <InlineMathBlock>{'f(\\mathbf{x}) = \\mathbf{x}^T\\mathbf{x} = x_1^2 + x_2^2 + \\cdots + x_n^2'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`\\frac{\\partial f}{\\partial x_i} = 2x_i \\implies \\nabla f(\\mathbf{x}) = 2\\mathbf{x}`}
          </MathBlock>

          <p className="mt-3 mb-2">
            For <InlineMathBlock>{'f(\\mathbf{x}) = \\mathbf{a}^T\\mathbf{x}'}</InlineMathBlock> (linear function):
          </p>
          <MathBlock>
            {`\\nabla f(\\mathbf{x}) = \\mathbf{a}`}
          </MathBlock>

          <p className="mt-3 mb-2">
            For <InlineMathBlock>{'f(\\mathbf{x}) = \\mathbf{x}^TA\\mathbf{x}'}</InlineMathBlock> (quadratic form):
          </p>
          <MathBlock>
            {`\\nabla f(\\mathbf{x}) = (A + A^T)\\mathbf{x}`}
          </MathBlock>
          <p className="mt-2">
            If <InlineMathBlock>{'A'}</InlineMathBlock> is symmetric, then{' '}
            <InlineMathBlock>{'\\nabla f(\\mathbf{x}) = 2A\\mathbf{x}'}</InlineMathBlock>
          </p>
        </Example>

        <SubSection title="Gradient Descent">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The gradient descent algorithm minimizes <InlineMathBlock>{'f(\\mathbf{x})'}</InlineMathBlock> by
            iteratively moving opposite to the gradient:
          </p>
          <MathBlock>
            {`\\mathbf{x}_{t+1} = \\mathbf{x}_t - \\alpha \\nabla f(\\mathbf{x}_t)`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            where <InlineMathBlock>{'\\alpha > 0'}</InlineMathBlock> is the learning rate.
          </p>
        </SubSection>

        <PythonEditor
          title="Gradient Descent from Scratch"
          initialCode={`import numpy as np
import matplotlib.pyplot as plt

# Function: f(x) = x^T x (sum of squares)
def f(x):
    return np.sum(x**2)

# Gradient: ∇f(x) = 2x
def grad_f(x):
    return 2 * x

# Gradient descent
def gradient_descent(x0, learning_rate=0.1, num_steps=20):
    x = x0.copy()
    history = [x.copy()]

    for _ in range(num_steps):
        x = x - learning_rate * grad_f(x)
        history.append(x.copy())

    return np.array(history)

# Starting point
x0 = np.array([3.0, 2.0])
history = gradient_descent(x0, learning_rate=0.1)

print("Gradient Descent Optimization")
print(f"Starting point: {x0}")
print(f"Final point: {history[-1]}")
print(f"f(x0) = {f(x0):.6f}")
print(f"f(x_final) = {f(history[-1]):.6f}")
print()

print("Trajectory (first 5 steps):")
for i, x in enumerate(history[:6]):
    print(f"Step {i}: x = [{x[0]:.4f}, {x[1]:.4f}], f(x) = {f(x):.6f}")`}
        />
      </Section>

      <Section title="Derivatives of Vector Functions" id="vector-derivatives">
        <Definition title="Jacobian Matrix">
          <p className="mb-2">
            For a vector function{' '}
            <InlineMathBlock>{'\\mathbf{f}: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMathBlock>, the{' '}
            <strong>Jacobian</strong> is the <InlineMathBlock>{'m \\times n'}</InlineMathBlock> matrix
            of partial derivatives:
          </p>
          <MathBlock>
            {`J = \\begin{bmatrix}
\\frac{\\partial f_1}{\\partial x_1} & \\cdots & \\frac{\\partial f_1}{\\partial x_n} \\\\
\\vdots & \\ddots & \\vdots \\\\
\\frac{\\partial f_m}{\\partial x_1} & \\cdots & \\frac{\\partial f_m}{\\partial x_n}
\\end{bmatrix}`}
          </MathBlock>
        </Definition>

        <Example title="Jacobian of Linear Transformation">
          <p className="mb-2">
            For <InlineMathBlock>{'\\mathbf{f}(\\mathbf{x}) = A\\mathbf{x}'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`J = A`}
          </MathBlock>
          <p className="mt-2">The Jacobian is simply the matrix <InlineMathBlock>{'A'}</InlineMathBlock>!</p>

          <p className="mt-4 mb-2">
            For <InlineMathBlock>{'\\mathbf{f}(\\mathbf{x}) = \\mathbf{x} \\odot \\mathbf{x}'}</InlineMathBlock> (element-wise square):
          </p>
          <MathBlock>
            {`J = \\begin{bmatrix}
2x_1 & 0 & \\cdots & 0 \\\\
0 & 2x_2 & \\cdots & 0 \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
0 & 0 & \\cdots & 2x_n
\\end{bmatrix} = 2\\text{diag}(\\mathbf{x})`}
          </MathBlock>
        </Example>

        <Note>
          <strong>Chain Rule for Jacobians:</strong> If{' '}
          <InlineMathBlock>{'\\mathbf{g}: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMathBlock> and{' '}
          <InlineMathBlock>{'\\mathbf{f}: \\mathbb{R}^m \\to \\mathbb{R}^p'}</InlineMathBlock>, then:
          <MathBlock>
            {`J_{\\mathbf{f} \\circ \\mathbf{g}} = J_{\\mathbf{f}} \\cdot J_{\\mathbf{g}}`}
          </MathBlock>
          This is the foundation of backpropagation!
        </Note>
      </Section>

      <Section title="Hessian Matrix" id="hessian">
        <Definition title="Hessian">
          <p className="mb-2">
            For a scalar function{' '}
            <InlineMathBlock>{'f: \\mathbb{R}^n \\to \\mathbb{R}'}</InlineMathBlock>, the{' '}
            <strong>Hessian</strong> is the <InlineMathBlock>{'n \\times n'}</InlineMathBlock> matrix
            of second partial derivatives:
          </p>
          <MathBlock>
            {`H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}`}
          </MathBlock>
        </Definition>

        <Theorem title="Properties of Hessian">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              For <InlineMathBlock>{'C^2'}</InlineMathBlock> functions, the Hessian is{' '}
              <strong>symmetric</strong>: <InlineMathBlock>{'H = H^T'}</InlineMathBlock>
            </li>
            <li>
              If <InlineMathBlock>{'H'}</InlineMathBlock> is positive definite at{' '}
              <InlineMathBlock>{'\\mathbf{x}^*'}</InlineMathBlock>, then{' '}
              <InlineMathBlock>{'\\mathbf{x}^*'}</InlineMathBlock> is a local minimum
            </li>
            <li>
              If <InlineMathBlock>{'H'}</InlineMathBlock> is negative definite, then{' '}
              <InlineMathBlock>{'\\mathbf{x}^*'}</InlineMathBlock> is a local maximum
            </li>
          </ul>
        </Theorem>

        <Example title="Hessian Examples">
          <p className="mb-2">
            For <InlineMathBlock>{'f(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}'}</InlineMathBlock> where{' '}
            <InlineMathBlock>{'A'}</InlineMathBlock> is symmetric:
          </p>
          <MathBlock>
            {`H = 2A`}
          </MathBlock>

          <p className="mt-4 mb-2">
            For the sum of squares{' '}
            <InlineMathBlock>{'f(\\mathbf{x}) = \\mathbf{x}^T\\mathbf{x}'}</InlineMathBlock>:
          </p>
          <MathBlock>
            {`H = 2I`}
          </MathBlock>
          <p className="mt-2">
            The Hessian is <InlineMathBlock>{'2I'}</InlineMathBlock>, which is positive definite, so the
            minimum at <InlineMathBlock>{'\\mathbf{x} = \\mathbf{0}'}</InlineMathBlock> is a global minimum.
          </p>
        </Example>
      </Section>

      <Section title="Matrix Derivatives" id="matrix-derivatives">
        <SubSection title="Common Derivatives">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Here are essential derivatives used constantly in ML:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">1. Linear function:</p>
              <MathBlock>
                {`\\frac{\\partial}{\\partial \\mathbf{x}}(\\mathbf{a}^T\\mathbf{x}) = \\mathbf{a}`}
              </MathBlock>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">2. Quadratic form:</p>
              <MathBlock>
                {`\\frac{\\partial}{\\partial \\mathbf{x}}(\\mathbf{x}^TA\\mathbf{x}) = (A + A^T)\\mathbf{x}`}
              </MathBlock>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">3. Matrix product trace:</p>
              <MathBlock>
                {`\\frac{\\partial}{\\partial A}\\text{tr}(AB) = B^T`}
              </MathBlock>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">4. Squared Frobenius norm:</p>
              <MathBlock>
                {`\\frac{\\partial}{\\partial A}\\|A\\|_F^2 = 2A`}
              </MathBlock>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">5. Determinant (for invertible A):</p>
              <MathBlock>
                {`\\frac{\\partial}{\\partial A}\\log\\det(A) = A^{-T}`}
              </MathBlock>
            </div>
          </div>
        </SubSection>
      </Section>

      <Section title="Applications in Machine Learning" id="ml-applications">
        <SubSection title="Backpropagation">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Backpropagation is the chain rule applied to neural networks. Consider a simple network:
          </p>
          <MathBlock>
            {`\\mathbf{h} = \\sigma(W_1\\mathbf{x}), \\quad \\mathbf{y} = W_2\\mathbf{h}, \\quad L = \\frac{1}{2}\\|\\mathbf{y} - \\mathbf{t}\\|^2`}
          </MathBlock>

          <p className="text-gray-700 dark:text-gray-300 my-3">
            To update weights via gradient descent, we need{' '}
            <InlineMathBlock>{'\\frac{\\partial L}{\\partial W_1}'}</InlineMathBlock> and{' '}
            <InlineMathBlock>{'\\frac{\\partial L}{\\partial W_2}'}</InlineMathBlock>:
          </p>

          <MathBlock>
            {`\\frac{\\partial L}{\\partial W_2} = (\\mathbf{y} - \\mathbf{t})\\mathbf{h}^T`}
          </MathBlock>

          <MathBlock>
            {`\\frac{\\partial L}{\\partial W_1} = \\left(W_2^T(\\mathbf{y} - \\mathbf{t}) \\odot \\sigma'(W_1\\mathbf{x})\\right)\\mathbf{x}^T`}
          </MathBlock>
        </SubSection>

        <PythonEditor
          title="Backpropagation from Scratch"
          initialCode={`import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    s = sigmoid(x)
    return s * (1 - s)

# Network: x -> W1 -> sigmoid -> h -> W2 -> y
# Loss: L = 0.5 * ||y - t||^2

# Initialize
np.random.seed(42)
n_input, n_hidden, n_output = 2, 3, 1
W1 = np.random.randn(n_hidden, n_input) * 0.5
W2 = np.random.randn(n_output, n_hidden) * 0.5

# Sample data
x = np.array([[1.0], [0.5]])
t = np.array([[1.0]])  # target

print("=== Forward Pass ===")
z1 = W1 @ x
print(f"z1 = W1 @ x = {z1.ravel()}")

h = sigmoid(z1)
print(f"h = sigmoid(z1) = {h.ravel()}")

y = W2 @ h
print(f"y = W2 @ h = {y.ravel()}")

L = 0.5 * np.sum((y - t)**2)
print(f"L = 0.5 * ||y - t||^2 = {L:.6f}")

print("\\n=== Backward Pass ===")

# Gradient of loss w.r.t. output
dL_dy = y - t
print(f"∂L/∂y = y - t = {dL_dy.ravel()}")

# Gradient w.r.t. W2
dL_dW2 = dL_dy @ h.T
print(f"∂L/∂W2 = (y - t) h^T =")
print(dL_dW2)

# Gradient w.r.t. h
dL_dh = W2.T @ dL_dy
print(f"\\n∂L/∂h = W2^T (y - t) = {dL_dh.ravel()}")

# Gradient w.r.t. z1 (before activation)
dL_dz1 = dL_dh * sigmoid_derivative(z1)
print(f"∂L/∂z1 = ∂L/∂h ⊙ σ'(z1) = {dL_dz1.ravel()}")

# Gradient w.r.t. W1
dL_dW1 = dL_dz1 @ x.T
print(f"\\n∂L/∂W1 = (∂L/∂z1) x^T =")
print(dL_dW1)

# Gradient descent update
learning_rate = 0.1
W1_new = W1 - learning_rate * dL_dW1
W2_new = W2 - learning_rate * dL_dW2

print("\\n=== After Update ===")
# Forward pass with new weights
y_new = W2_new @ sigmoid(W1_new @ x)
L_new = 0.5 * np.sum((y_new - t)**2)
print(f"New loss: {L_new:.6f} (was {L:.6f})")
print(f"Loss decreased by: {L - L_new:.6f}")`}
        />

        <SubSection title="Newton's Method">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Second-order optimization uses the Hessian for faster convergence:
          </p>
          <MathBlock>
            {`\\mathbf{x}_{t+1} = \\mathbf{x}_t - H^{-1}\\nabla f(\\mathbf{x}_t)`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            This converges quadratically near the optimum but requires computing and inverting the Hessian.
          </p>
        </SubSection>

        <PythonEditor
          title="Comparing Gradient Descent vs Newton's Method"
          initialCode={`import numpy as np

# Function: f(x) = x^T A x - b^T x (quadratic)
A = np.array([[4, 1],
              [1, 3]])
b = np.array([1, 2])

def f(x):
    return 0.5 * x.T @ A @ x - b.T @ x

def grad_f(x):
    return A @ x - b

def hessian_f(x):
    return A  # Constant for quadratic

# Initial point
x0 = np.array([5.0, 5.0])

print("=== Gradient Descent ===")
x_gd = x0.copy()
lr = 0.1
for i in range(10):
    x_gd = x_gd - lr * grad_f(x_gd)
    if i < 3 or i == 9:
        print(f"Step {i+1}: f(x) = {f(x_gd):.6f}")

print("\\n=== Newton's Method ===")
x_newton = x0.copy()
for i in range(10):
    H = hessian_f(x_newton)
    x_newton = x_newton - np.linalg.solve(H, grad_f(x_newton))
    if i < 3 or i == 9:
        print(f"Step {i+1}: f(x) = {f(x_newton):.6f}")

# True optimum: A x* = b => x* = A^{-1} b
x_opt = np.linalg.solve(A, b)
print(f"\\nTrue optimum: x* = {x_opt}")
print(f"f(x*) = {f(x_opt):.6f}")

print("\\nFinal errors:")
print(f"GD error: ||x_gd - x*|| = {np.linalg.norm(x_gd - x_opt):.6e}")
print(f"Newton error: ||x_newton - x*|| = {np.linalg.norm(x_newton - x_opt):.6e}")
print("\\nNewton's method converges much faster!")`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Compute the gradient of f(x) = ||Ax - b||² with respect to x."
          hint="Expand the norm: ||Ax - b||² = (Ax - b)^T(Ax - b)"
          solution={`Expand the squared norm:
f(x) = (Ax - b)^T(Ax - b)
     = x^T A^T A x - 2b^T A x + b^T b

Taking the gradient:
∇f(x) = 2A^T A x - 2A^T b
      = 2A^T(Ax - b)

Setting ∇f(x) = 0 gives the normal equation:
A^T A x = A^T b`}
        />

        <Exercise
          problem="For f(x) = log(1 + exp(w^T x)), compute ∇f with respect to x."
          hint="Use the chain rule: d/dx log(g(x)) = g'(x)/g(x)"
          solution={`Let u = w^T x, so f = log(1 + exp(u))

∂f/∂u = exp(u)/(1 + exp(u)) = σ(u)  (sigmoid!)

By chain rule:
∇_x f = (∂f/∂u)(∂u/∂x)
      = σ(w^T x) · w

This appears in logistic regression!`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Matrix Calculus Quiz"
          questions={[
            {
              question: 'What is the gradient of f(x) = a^T x?',
              options: ['x', 'a', 'a^T', '0'],
              correctAnswer: 1,
              explanation: 'The gradient of a linear function a^T x with respect to x is simply a.'
            },
            {
              question: 'For a symmetric matrix A, what is ∇_x (x^T A x)?',
              options: ['A x', '2A x', 'A^T x', 'x^T A'],
              correctAnswer: 1,
              explanation: 'For symmetric A, the gradient of the quadratic form x^T A x is 2Ax.'
            },
            {
              question: 'The Hessian matrix is always:',
              options: [
                'Diagonal',
                'Symmetric',
                'Positive definite',
                'Invertible'
              ],
              correctAnswer: 1,
              explanation: 'For C² functions, the Hessian is always symmetric (mixed partials are equal).'
            },
            {
              question: 'Backpropagation is fundamentally an application of:',
              options: [
                'Product rule',
                'Quotient rule',
                'Chain rule',
                'Power rule'
              ],
              correctAnswer: 2,
              explanation: 'Backpropagation applies the chain rule to compute gradients through composed functions.'
            },
            {
              question: 'If H (Hessian) is positive definite at x*, then x* is:',
              options: [
                'A saddle point',
                'A local maximum',
                'A local minimum',
                'Not critical'
              ],
              correctAnswer: 2,
              explanation: 'A positive definite Hessian at a critical point indicates a local minimum.'
            }
          ]}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Gradient ∇f points in direction of steepest ascent</li>
          <li>• Jacobian J contains all first-order partial derivatives of vector functions</li>
          <li>• Hessian H contains second-order partials; symmetric for smooth functions</li>
          <li>• Chain rule for Jacobians enables backpropagation</li>
          <li>• Gradient descent updates: x = x - alpha * gradient(f)</li>
          <li>• Newton's method converges faster using Hessian</li>
          <li>• Essential for optimization, neural networks, and all of ML</li>
        </ul>
      </div>
    </div>
  )
}
