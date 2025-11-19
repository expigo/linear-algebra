import Section, { SubSection } from '../../components/Section'
import MathBlock, { InlineMathBlock } from '../../components/MathBlock'
import Definition, { Theorem, Example, Note } from '../../components/Definition'
import { VectorPlot2D } from '../../components/VectorPlot3D'
import VectorPlot3D from '../../components/VectorPlot3D'
import PythonEditor from '../../components/PythonEditor'
import Quiz from '../../components/Quiz'
import Exercise from '../../components/Exercise'

export default function VectorsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Chapter 1: Vectors
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Vectors are fundamental objects in linear algebra that represent both magnitude and direction.
          They appear throughout mathematics, physics, computer science, and machine learning. In this
          chapter, we'll explore vectors from both geometric and algebraic perspectives.
        </p>

        <Definition title="Vector">
          <p className="mb-2">
            A <strong>vector</strong> in <InlineMathBlock>{'\\mathbb{R}^n'}</InlineMathBlock> is an
            ordered list of <InlineMathBlock>{'n'}</InlineMathBlock> real numbers, typically written as:
          </p>
          <MathBlock>
            {`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}`}
          </MathBlock>
          <p className="mt-2">
            where <InlineMathBlock>{'v_1, v_2, \\ldots, v_n'}</InlineMathBlock> are the{' '}
            <strong>components</strong> or <strong>coordinates</strong> of the vector.
          </p>
        </Definition>

        <Note>
          We use boldface (<InlineMathBlock>{'\\mathbf{v}'}</InlineMathBlock>) to denote vectors and
          distinguish them from scalars (regular numbers).
        </Note>
      </Section>

      <Section title="Geometric Interpretation" id="geometric">
        <SubSection title="Vectors in 2D">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            In <InlineMathBlock>{'\\mathbb{R}^2'}</InlineMathBlock>, a vector can be visualized as an
            arrow from the origin to the point <InlineMathBlock>{'(v_1, v_2)'}</InlineMathBlock>.
          </p>

          <VectorPlot2D
            vectors={[
              { x: 3, y: 2, color: '#3b82f6', label: 'v = [3, 2]' },
              { x: -2, y: 3, color: '#ef4444', label: 'w = [-2, 3]' },
              { x: 1, y: -2.5, color: '#10b981', label: 'u = [1, -2.5]' }
            ]}
            title="Vectors in R²"
          />

          <Example title="2D Vectors in Applications">
            <p className="mb-2">Vectors in 2D naturally represent:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Physics:</strong> velocity, force, acceleration</li>
              <li><strong>Computer Graphics:</strong> positions, directions</li>
              <li><strong>Data Science:</strong> features with two attributes (e.g., [height, weight])</li>
            </ul>
          </Example>
        </SubSection>

        <SubSection title="Vectors in 3D">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            In <InlineMathBlock>{'\\mathbb{R}^3'}</InlineMathBlock>, vectors have three components
            and can be visualized in 3D space:
          </p>

          <VectorPlot3D
            vectors={[
              { x: 3, y: 2, z: 1, color: '#3b82f6', label: 'v = [3, 2, 1]' },
              { x: -1, y: 2, z: 3, color: '#ef4444', label: 'w = [-1, 2, 3]' },
              { x: 2, y: -1, z: 2, color: '#10b981', label: 'u = [2, -1, 2]' }
            ]}
            title="Vectors in R³"
          />
        </SubSection>
      </Section>

      <Section title="Vector Operations" id="operations">
        <SubSection title="Vector Addition">
          <Definition title="Vector Addition">
            <p className="mb-2">
              Given vectors{' '}
              <InlineMathBlock>{'\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n'}</InlineMathBlock>,
              their sum is defined component-wise:
            </p>
            <MathBlock>
              {`\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix} u_1 \\\\ u_2 \\\\ \\vdots \\\\ u_n \\end{bmatrix} + \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} = \\begin{bmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix}`}
            </MathBlock>
          </Definition>

          <p className="text-gray-700 dark:text-gray-300 my-4">
            Geometrically, vector addition follows the <strong>parallelogram rule</strong> or{' '}
            <strong>tip-to-tail method</strong>:
          </p>

          <VectorPlot2D
            vectors={[
              { x: 3, y: 1, color: '#3b82f6', label: 'u = [3, 1]' },
              { x: 1, y: 2, color: '#ef4444', label: 'v = [1, 2]' },
              { x: 4, y: 3, color: '#10b981', label: 'u + v = [4, 3]' }
            ]}
            title="Vector Addition: u + v"
          />

          <Example title="Adding Velocity Vectors">
            <p className="mb-3">
              A boat travels with velocity <InlineMathBlock>{'\\mathbf{v}_b = [3, 4]'}</InlineMathBlock>{' '}
              m/s (east: 3, north: 4) in still water. A current flows with velocity{' '}
              <InlineMathBlock>{'\\mathbf{v}_c = [1, -1]'}</InlineMathBlock> m/s. What is the boat's
              actual velocity?
            </p>
            <p className="mb-2"><strong>Solution:</strong></p>
            <MathBlock>
              {`\\mathbf{v}_{\\text{actual}} = \\mathbf{v}_b + \\mathbf{v}_c = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} + \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}`}
            </MathBlock>
            <p>The boat moves at 4 m/s east and 3 m/s north.</p>
          </Example>
        </SubSection>

        <SubSection title="Scalar Multiplication">
          <Definition title="Scalar Multiplication">
            <p className="mb-2">
              Given a scalar <InlineMathBlock>{'c \\in \\mathbb{R}'}</InlineMathBlock> and a vector{' '}
              <InlineMathBlock>{'\\mathbf{v} \\in \\mathbb{R}^n'}</InlineMathBlock>:
            </p>
            <MathBlock>
              {`c\\mathbf{v} = c\\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} = \\begin{bmatrix} cv_1 \\\\ cv_2 \\\\ \\vdots \\\\ cv_n \\end{bmatrix}`}
            </MathBlock>
          </Definition>

          <p className="text-gray-700 dark:text-gray-300 my-4">
            Scalar multiplication scales the vector by a factor. If <InlineMathBlock>{'c > 1'}</InlineMathBlock>,
            the vector lengthens. If <InlineMathBlock>{'0 < c < 1'}</InlineMathBlock>, it shortens.
            If <InlineMathBlock>{'c < 0'}</InlineMathBlock>, it reverses direction.
          </p>

          <VectorPlot2D
            vectors={[
              { x: 2, y: 1, color: '#3b82f6', label: 'v = [2, 1]' },
              { x: 4, y: 2, color: '#10b981', label: '2v = [4, 2]' },
              { x: -2, y: -1, color: '#ef4444', label: '-v = [-2, -1]' },
              { x: 1, y: 0.5, color: '#f59e0b', label: '0.5v = [1, 0.5]' }
            ]}
            title="Scalar Multiplication"
            xRange={[-3, 5]}
            yRange={[-2, 3]}
          />
        </SubSection>

        <SubSection title="Dot Product (Inner Product)">
          <Definition title="Dot Product">
            <p className="mb-2">
              The <strong>dot product</strong> of vectors{' '}
              <InlineMathBlock>{'\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n'}</InlineMathBlock> is:
            </p>
            <MathBlock>
              {`\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n = \\sum_{i=1}^n u_iv_i`}
            </MathBlock>
            <p className="mt-2">
              The result is a <strong>scalar</strong> (a single number).
            </p>
          </Definition>

          <Theorem title="Geometric Interpretation of Dot Product">
            <p className="mb-2">
              For non-zero vectors <InlineMathBlock>{'\\mathbf{u}, \\mathbf{v}'}</InlineMathBlock>:
            </p>
            <MathBlock>
              {`\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos\\theta`}
            </MathBlock>
            <p className="mt-2">
              where <InlineMathBlock>{'\\theta'}</InlineMathBlock> is the angle between the vectors,
              and <InlineMathBlock>{'\\|\\mathbf{v}\\|'}</InlineMathBlock> denotes the magnitude (length).
            </p>
          </Theorem>

          <Note>
            <p className="mb-2"><strong>Key Properties:</strong></p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>If <InlineMathBlock>{'\\mathbf{u} \\cdot \\mathbf{v} = 0'}</InlineMathBlock>, the vectors are <strong>orthogonal</strong> (perpendicular)</li>
              <li>If <InlineMathBlock>{'\\mathbf{u} \\cdot \\mathbf{v} > 0'}</InlineMathBlock>, the angle is acute</li>
              <li>If <InlineMathBlock>{'\\mathbf{u} \\cdot \\mathbf{v} < 0'}</InlineMathBlock>, the angle is obtuse</li>
            </ul>
          </Note>

          <Example title="Computing Dot Products">
            <p className="mb-2">
              Let <InlineMathBlock>{'\\mathbf{u} = [2, 3, -1]'}</InlineMathBlock> and{' '}
              <InlineMathBlock>{'\\mathbf{v} = [1, -2, 4]'}</InlineMathBlock>.
            </p>
            <MathBlock>
              {`\\mathbf{u} \\cdot \\mathbf{v} = (2)(1) + (3)(-2) + (-1)(4) = 2 - 6 - 4 = -8`}
            </MathBlock>
            <p className="mt-2">
              Since the dot product is negative, the angle between the vectors is obtuse.
            </p>
          </Example>
        </SubSection>

        <SubSection title="Vector Magnitude (Norm)">
          <Definition title="Euclidean Norm">
            <p className="mb-2">
              The <strong>magnitude</strong> or <strong>Euclidean norm</strong> of a vector{' '}
              <InlineMathBlock>{'\\mathbf{v} \\in \\mathbb{R}^n'}</InlineMathBlock> is:
            </p>
            <MathBlock>
              {`\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2} = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}`}
            </MathBlock>
          </Definition>

          <p className="text-gray-700 dark:text-gray-300 my-4">
            A <strong>unit vector</strong> is a vector with magnitude 1. Any non-zero vector can be
            normalized by dividing by its magnitude:
          </p>
          <MathBlock>
            {`\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}`}
          </MathBlock>

          <Example title="Normalizing a Vector">
            <p className="mb-2">
              Normalize <InlineMathBlock>{'\\mathbf{v} = [3, 4]'}</InlineMathBlock>:
            </p>
            <MathBlock>
              {`\\|\\mathbf{v}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5`}
            </MathBlock>
            <MathBlock>
              {`\\hat{\\mathbf{v}} = \\frac{1}{5}\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix}`}
            </MathBlock>
          </Example>
        </SubSection>
      </Section>

      <Section title="Python Implementation" id="python">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Let's implement vector operations using NumPy. Try modifying the code below and running it!
        </p>

        <PythonEditor
          title="Vector Operations with NumPy"
          initialCode={`import numpy as np

# Define vectors
u = np.array([2, 3, -1])
v = np.array([1, -2, 4])

print("Vector u:", u)
print("Vector v:", v)
print()

# Vector addition
print("u + v =", u + v)

# Scalar multiplication
print("2 * u =", 2 * u)

# Dot product
dot_product = np.dot(u, v)
print("u · v =", dot_product)

# Magnitude
magnitude_u = np.linalg.norm(u)
magnitude_v = np.linalg.norm(v)
print("||u|| =", magnitude_u)
print("||v|| =", magnitude_v)

# Normalize u
u_normalized = u / magnitude_u
print("Normalized u:", u_normalized)
print("||normalized u|| =", np.linalg.norm(u_normalized))

# Angle between vectors
cos_theta = dot_product / (magnitude_u * magnitude_v)
theta_rad = np.arccos(cos_theta)
theta_deg = np.degrees(theta_rad)
print(f"Angle between u and v: {theta_deg:.2f}°")`}
        />

        <PythonEditor
          title="Vector Visualization"
          initialCode={`import numpy as np

# Create a 2D vector dataset (like data points)
# Each row is a data point with 2 features
data = np.array([
    [2.5, 3.0],
    [1.0, 2.5],
    [3.5, 4.0],
    [2.0, 1.5]
])

print("Dataset shape:", data.shape)
print("Dataset:")
print(data)
print()

# Compute mean vector (centroid)
mean_vector = np.mean(data, axis=0)
print("Mean vector (centroid):", mean_vector)

# Compute distances from origin
distances = np.linalg.norm(data, axis=1)
print("Distances from origin:", distances)

# Find the closest and farthest points
closest_idx = np.argmin(distances)
farthest_idx = np.argmax(distances)
print(f"Closest point: {data[closest_idx]} at distance {distances[closest_idx]:.2f}")
print(f"Farthest point: {data[farthest_idx]} at distance {distances[farthest_idx]:.2f}")`}
        />
      </Section>

      <Section title="Exercises" id="exercises">
        <Exercise
          problem="Given vectors u = [3, -1, 2] and v = [1, 4, -2], compute:
a) u + v
b) 3u - 2v
c) u · v
d) ||u|| and ||v||"
          hint="For part b, first compute 3u and 2v separately, then subtract."
          solution={`a) u + v = [3+1, -1+4, 2+(-2)] = [4, 3, 0]

b) 3u = [9, -3, 6]
   2v = [2, 8, -4]
   3u - 2v = [9-2, -3-8, 6-(-4)] = [7, -11, 10]

c) u · v = (3)(1) + (-1)(4) + (2)(-2)
         = 3 - 4 - 4 = -5

d) ||u|| = √(9 + 1 + 4) = √14 ≈ 3.742
   ||v|| = √(1 + 16 + 4) = √21 ≈ 4.583`}
        />

        <Exercise
          problem="Prove that for any vectors u and v, ||u + v|| ≤ ||u|| + ||v|| (Triangle Inequality)."
          hint="Use the Cauchy-Schwarz inequality: |u · v| ≤ ||u|| ||v||"
          solution={`Proof:
||u + v||² = (u + v) · (u + v)
           = u · u + 2(u · v) + v · v
           = ||u||² + 2(u · v) + ||v||²
           ≤ ||u||² + 2|u · v| + ||v||²
           ≤ ||u||² + 2||u|| ||v|| + ||v||²    (by Cauchy-Schwarz)
           = (||u|| + ||v||)²

Taking square roots of both sides:
||u + v|| ≤ ||u|| + ||v||   ∎`}
        />

        <Exercise
          problem="Find a unit vector in the direction of v = [6, -8]."
          hint="First compute ||v||, then divide v by ||v||."
          solution={`||v|| = √(36 + 64) = √100 = 10

Unit vector = v/||v|| = (1/10)[6, -8] = [0.6, -0.8]

Verification: ||(0.6, -0.8)|| = √(0.36 + 0.64) = √1 = 1 ✓`}
        />
      </Section>

      <Section title="Quiz" id="quiz">
        <Quiz
          title="Vectors Quiz"
          questions={[
            {
              question: 'What is the result of the dot product of two perpendicular vectors?',
              options: ['1', '0', '-1', 'Undefined'],
              correctAnswer: 1,
              explanation: 'When two vectors are perpendicular (orthogonal), their dot product is 0 because cos(90°) = 0.'
            },
            {
              question: 'If vector u = [3, 4], what is its magnitude ||u||?',
              options: ['7', '5', '25', '12'],
              correctAnswer: 1,
              explanation: '||u|| = √(3² + 4²) = √(9 + 16) = √25 = 5'
            },
            {
              question: 'What happens to a vector when multiplied by a negative scalar?',
              options: [
                'It becomes perpendicular to the original',
                'Its magnitude becomes negative',
                'It reverses direction',
                'Nothing changes'
              ],
              correctAnswer: 2,
              explanation: 'Multiplying by a negative scalar reverses the direction of the vector while scaling its magnitude by the absolute value of the scalar.'
            },
            {
              question: 'Which operation on two vectors produces a scalar?',
              options: ['Addition', 'Subtraction', 'Dot product', 'Scalar multiplication'],
              correctAnswer: 2,
              explanation: 'The dot product (inner product) of two vectors produces a scalar value, while addition and subtraction produce vectors.'
            },
            {
              question: 'If u · v = 0 and both u and v are non-zero, what can we conclude?',
              options: [
                'u = v',
                'u and v are parallel',
                'u and v are orthogonal',
                'One vector is zero'
              ],
              correctAnswer: 2,
              explanation: 'When the dot product is zero and both vectors are non-zero, the vectors must be orthogonal (perpendicular) to each other.'
            }
          ]}
        />
      </Section>

      <Section title="Applications in Machine Learning" id="ml-applications">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Vectors are ubiquitous in machine learning:
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Feature Vectors
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              In ML, each data point is represented as a vector where each component is a feature.
              For example, a house might be represented as [square_feet, bedrooms, age, price].
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Word Embeddings
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Words are represented as high-dimensional vectors (e.g., 300D) where similar words
              have similar vectors. The famous example: vec("king") - vec("man") + vec("woman") ≈ vec("queen")
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Similarity Measures
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Cosine similarity uses the dot product to measure how similar two vectors are,
              commonly used in recommendation systems and text analysis.
            </p>
          </div>
        </div>

        <PythonEditor
          title="ML Application: Cosine Similarity"
          initialCode={`import numpy as np

def cosine_similarity(u, v):
    """Compute cosine similarity between two vectors."""
    return np.dot(u, v) / (np.linalg.norm(u) * np.linalg.norm(v))

# Example: Document similarity
# Each document represented as word frequency vector
# [count of 'machine', 'learning', 'data', 'science']
doc1 = np.array([5, 8, 3, 2])   # ML article
doc2 = np.array([4, 7, 4, 3])   # Another ML article
doc3 = np.array([0, 1, 0, 9])   # Science article

print("Document vectors:")
print("Doc1:", doc1)
print("Doc2:", doc2)
print("Doc3:", doc3)
print()

# Compute similarities
sim_1_2 = cosine_similarity(doc1, doc2)
sim_1_3 = cosine_similarity(doc1, doc3)
sim_2_3 = cosine_similarity(doc2, doc3)

print(f"Similarity between Doc1 and Doc2: {sim_1_2:.4f}")
print(f"Similarity between Doc1 and Doc3: {sim_1_3:.4f}")
print(f"Similarity between Doc2 and Doc3: {sim_2_3:.4f}")
print()
print("Doc1 and Doc2 are most similar (both about ML)!")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter Summary
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Vectors are ordered lists of numbers representing magnitude and direction</li>
          <li>• Key operations: addition, scalar multiplication, dot product</li>
          <li>• Dot product connects to angles and orthogonality</li>
          <li>• Vector magnitude (norm) measures length</li>
          <li>• Vectors are fundamental in ML for representing data points and features</li>
        </ul>
      </div>
    </div>
  )
}
