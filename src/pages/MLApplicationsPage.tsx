import Section, { SubSection } from '../components/Section'
import MathBlock, { InlineMathBlock } from '../components/MathBlock'
import { Example, Note } from '../components/Definition'
import PythonEditor from '../components/PythonEditor'

export default function MLApplicationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Machine Learning Applications
      </h1>

      <Section title="Introduction" id="introduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Linear algebra is the mathematical foundation of machine learning and deep learning.
          Almost every ML algorithm relies on vectors, matrices, and linear transformations.
          This chapter connects the theory you've learned to practical ML applications.
        </p>
      </Section>

      <Section title="Principal Component Analysis (PCA)" id="pca">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          PCA is a dimensionality reduction technique that finds the directions of maximum variance
          in high-dimensional data. It's based on eigendecomposition of the covariance matrix.
        </p>

        <SubSection title="Mathematical Formulation">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Given centered data matrix <InlineMathBlock>{'X \\in \\mathbb{R}^{n \\times d}'}</InlineMathBlock>:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Compute covariance matrix: <InlineMathBlock>{'C = \\frac{1}{n-1}X^TX'}</InlineMathBlock></li>
            <li>Find eigenvalues and eigenvectors of <InlineMathBlock>{'C'}</InlineMathBlock></li>
            <li>Sort eigenvectors by eigenvalue (descending)</li>
            <li>Project data onto top <InlineMathBlock>{'k'}</InlineMathBlock> eigenvectors</li>
          </ol>
        </SubSection>

        <Note>
          <strong>Alternative:</strong> Compute SVD of centered data directly:{' '}
          <InlineMathBlock>{'X = U\\Sigma V^T'}</InlineMathBlock>. The columns of <InlineMathBlock>{'V'}</InlineMathBlock>{' '}
          are the principal components!
        </Note>

        <PythonEditor
          title="PCA from Scratch"
          initialCode={`import numpy as np

# Generate correlated 2D data
np.random.seed(42)
n = 200

# Create data with correlation
mean = [0, 0]
cov = [[3, 1.5],
       [1.5, 1]]
X = np.random.multivariate_normal(mean, cov, n)

print("Data shape:", X.shape)
print("Mean:", X.mean(axis=0))
print("Covariance:")
print(np.cov(X.T))
print()

# Method 1: Via covariance matrix eigendecomposition
X_centered = X - X.mean(axis=0)
C = np.cov(X_centered.T)

eigenvalues, eigenvectors = np.linalg.eig(C)

# Sort by eigenvalue
idx = eigenvalues.argsort()[::-1]
eigenvalues = eigenvalues[idx]
eigenvectors = eigenvectors[:, idx]

print("=== Method 1: Eigendecomposition ===")
print("Eigenvalues:", eigenvalues)
print("Variance explained:", eigenvalues / eigenvalues.sum())
print("Principal components:")
print(eigenvectors)
print()

# Project onto first PC
X_pca1 = X_centered @ eigenvectors[:, 0:1]

# Method 2: Via SVD (more numerically stable)
print("=== Method 2: SVD ===")
U, s, VT = np.linalg.svd(X_centered, full_matrices=False)

# Singular values squared give eigenvalues (up to scaling)
eigenvalues_svd = (s**2) / (n - 1)
print("Eigenvalues from SVD:", eigenvalues_svd)
print("Principal components from SVD:")
print(VT.T)
print()

# Reconstruct from k components
k = 1
X_reconstructed = (U[:, :k] @ np.diag(s[:k]) @ VT[:k, :]) + X.mean(axis=0)

print(f"Original data variance: {np.var(X, axis=0).sum():.4f}")
print(f"Reconstructed variance (k={k}): {np.var(X_reconstructed, axis=0).sum():.4f}")
print(f"Variance retained: {eigenvalues[:k].sum() / eigenvalues.sum() * 100:.2f}%")`}
        />
      </Section>

      <Section title="Linear Regression" id="linear-regression">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Linear regression finds the best-fit linear relationship between features and targets
          by solving a system of linear equations.
        </p>

        <SubSection title="Normal Equation">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The optimal weights minimize the mean squared error:
          </p>
          <MathBlock>
            {`\\mathbf{w}^* = \\arg\\min_\\mathbf{w} \\|X\\mathbf{w} - \\mathbf{y}\\|^2`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 my-3">Solution (normal equation):</p>
          <MathBlock>
            {`\\mathbf{w}^* = (X^TX)^{-1}X^T\\mathbf{y}`}
          </MathBlock>
        </SubSection>

        <PythonEditor
          title="Linear Regression Implementation"
          initialCode={`import numpy as np

# Generate synthetic data: y = 3x₁ + 2x₂ + 1 + noise
np.random.seed(42)
n = 100

X = np.random.randn(n, 2)  # 2 features
true_w = np.array([3, 2])
true_b = 1
y = X @ true_w + true_b + 0.5 * np.random.randn(n)

# Add bias term
X_b = np.c_[np.ones(n), X]

print("X shape:", X_b.shape)
print("y shape:", y.shape)
print()

# Solve using normal equation
w = np.linalg.solve(X_b.T @ X_b, X_b.T @ y)

print("True parameters: [bias=1, w1=3, w2=2]")
print(f"Learned parameters: {w}")
print()

# Make predictions
y_pred = X_b @ w

# Compute metrics
mse = np.mean((y - y_pred)**2)
r2 = 1 - (np.sum((y - y_pred)**2) / np.sum((y - y.mean())**2))

print(f"MSE: {mse:.4f}")
print(f"R² score: {r2:.4f}")`}
        />
      </Section>

      <Section title="Neural Networks" id="neural-networks">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Neural networks are compositions of linear transformations (matrix multiplications)
          and non-linear activations.
        </p>

        <SubSection title="Forward Pass">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Each layer computes:
          </p>
          <MathBlock>
            {`\\mathbf{h}^{(l+1)} = \\sigma(W^{(l)}\\mathbf{h}^{(l)} + \\mathbf{b}^{(l)})`}
          </MathBlock>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            where <InlineMathBlock>{'W^{(l)}'}</InlineMathBlock> is the weight matrix,{' '}
            <InlineMathBlock>{'\\mathbf{b}^{(l)}'}</InlineMathBlock> is the bias, and{' '}
            <InlineMathBlock>{'\\sigma'}</InlineMathBlock> is an activation function.
          </p>
        </SubSection>

        <PythonEditor
          title="Simple Neural Network from Scratch"
          initialCode={`import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return sigmoid(x) * (1 - sigmoid(x))

# Generate XOR dataset
X = np.array([[0, 0],
              [0, 1],
              [1, 0],
              [1, 1]])
y = np.array([[0], [1], [1], [0]])

print("Training XOR:")
print("X:\\n", X)
print("y:\\n", y.T)
print()

# Initialize weights
np.random.seed(42)
n_input = 2
n_hidden = 4
n_output = 1

W1 = np.random.randn(n_input, n_hidden) * 0.5
b1 = np.zeros((1, n_hidden))
W2 = np.random.randn(n_hidden, n_output) * 0.5
b2 = np.zeros((1, n_output))

# Training
learning_rate = 0.5
epochs = 10000

for epoch in range(epochs):
    # Forward pass
    z1 = X @ W1 + b1
    a1 = sigmoid(z1)
    z2 = a1 @ W2 + b2
    a2 = sigmoid(z2)

    # Compute loss (MSE)
    loss = np.mean((y - a2)**2)

    # Backward pass
    dz2 = (a2 - y) * sigmoid_derivative(z2)
    dW2 = a1.T @ dz2
    db2 = np.sum(dz2, axis=0, keepdims=True)

    dz1 = (dz2 @ W2.T) * sigmoid_derivative(z1)
    dW1 = X.T @ dz1
    db1 = np.sum(dz1, axis=0, keepdims=True)

    # Update weights
    W1 -= learning_rate * dW1
    b1 -= learning_rate * db1
    W2 -= learning_rate * dW2
    b2 -= learning_rate * db2

    if (epoch + 1) % 2000 == 0:
        print(f"Epoch {epoch+1}, Loss: {loss:.6f}")

print("\\nFinal predictions:")
z1 = X @ W1 + b1
a1 = sigmoid(z1)
z2 = a1 @ W2 + b2
predictions = sigmoid(z2)

for i, (x, pred, true) in enumerate(zip(X, predictions, y)):
    print(f"Input: {x}, Predicted: {pred[0]:.4f}, True: {true[0]}")`}
        />
      </Section>

      <Section title="Image Classification" id="image-classification">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Images are represented as matrices (or 3D tensors for color). Linear algebra operations
          enable feature extraction and classification.
        </p>

        <PythonEditor
          title="Simple Linear Classifier"
          initialCode={`import numpy as np

# Simulate MNIST-like digit images (8x8 pixels, flattened)
np.random.seed(42)
n_samples = 100
n_features = 64  # 8x8 image
n_classes = 10   # digits 0-9

# Generate random "images" and labels
X = np.random.randn(n_samples, n_features)
y = np.random.randint(0, n_classes, n_samples)

# Convert labels to one-hot encoding
y_onehot = np.zeros((n_samples, n_classes))
y_onehot[np.arange(n_samples), y] = 1

print("X shape:", X.shape)
print("y_onehot shape:", y_onehot.shape)
print()

# Initialize weights for linear classifier
W = np.random.randn(n_features, n_classes) * 0.01
b = np.zeros((1, n_classes))

# Softmax function
def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=1, keepdims=True)

# Training
learning_rate = 0.1
epochs = 100

for epoch in range(epochs):
    # Forward pass: scores = XW + b
    scores = X @ W + b
    probs = softmax(scores)

    # Cross-entropy loss
    correct_log_probs = -np.log(probs[np.arange(n_samples), y] + 1e-10)
    loss = np.mean(correct_log_probs)

    # Backward pass
    dscores = probs.copy()
    dscores[np.arange(n_samples), y] -= 1
    dscores /= n_samples

    dW = X.T @ dscores
    db = np.sum(dscores, axis=0, keepdims=True)

    # Update
    W -= learning_rate * dW
    b -= learning_rate * db

    if (epoch + 1) % 20 == 0:
        # Compute accuracy
        predictions = np.argmax(scores, axis=1)
        accuracy = np.mean(predictions == y)
        print(f"Epoch {epoch+1}: Loss={loss:.4f}, Accuracy={accuracy*100:.2f}%")

# Final accuracy
scores = X @ W + b
predictions = np.argmax(scores, axis=1)
accuracy = np.mean(predictions == y)
print(f"\\nFinal accuracy: {accuracy*100:.2f}%")`}
        />
      </Section>

      <Section title="Dimensionality Reduction" id="dimensionality-reduction">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Reducing dimensions while preserving important information is crucial for visualization,
          compression, and avoiding the curse of dimensionality.
        </p>

        <Example title="Why Dimensionality Reduction?">
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Visualization:</strong> Project high-D data to 2D/3D for plotting</li>
            <li><strong>Noise reduction:</strong> Remove dimensions with low variance</li>
            <li><strong>Computational efficiency:</strong> Fewer features = faster training</li>
            <li><strong>Overfitting prevention:</strong> Fewer parameters to learn</li>
          </ul>
        </Example>

        <PythonEditor
          title="Comparison: PCA vs Random Projection"
          initialCode={`import numpy as np

# Generate high-dimensional data
np.random.seed(42)
n = 100
d = 50  # Original dimension

# Create data with some structure
X = np.random.randn(n, 10)  # 10 latent factors
W_true = np.random.randn(10, d)  # Map to 50D
X_high = X @ W_true + 0.1 * np.random.randn(n, d)

print(f"Original dimension: {X_high.shape[1]}")
print(f"Target dimension: 2")
print()

# Method 1: PCA
X_centered = X_high - X_high.mean(axis=0)
U, s, VT = np.linalg.svd(X_centered, full_matrices=False)

k = 2
X_pca = U[:, :k] @ np.diag(s[:k])

variance_explained = (s[:k]**2).sum() / (s**2).sum()
print(f"PCA variance explained: {variance_explained*100:.2f}%")
print()

# Method 2: Random Projection
R = np.random.randn(d, k) / np.sqrt(k)
X_random = X_centered @ R

print("PCA projection shape:", X_pca.shape)
print("Random projection shape:", X_random.shape)
print()

# Compute pairwise distances in original space
def pairwise_distances(X):
    """Compute pairwise Euclidean distances."""
    return np.sqrt(np.sum((X[:, None, :] - X[None, :, :])**2, axis=2))

dist_original = pairwise_distances(X_centered[:10, :])  # First 10 samples
dist_pca = pairwise_distances(X_pca[:10, :])
dist_random = pairwise_distances(X_random[:10, :])

print("Distance preservation (first 10 samples):")
print(f"PCA error: {np.mean((dist_original - dist_pca)**2):.4f}")
print(f"Random projection error: {np.mean((dist_original - dist_random)**2):.4f}")
print("(PCA better preserves distances)")`}
        />
      </Section>

      <Section title="Recommender Systems" id="recommender">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Matrix factorization is the foundation of collaborative filtering recommender systems.
          The idea: users and items can be represented in a low-dimensional latent space.
        </p>

        <PythonEditor
          title="Matrix Factorization for Recommendations"
          initialCode={`import numpy as np

# User-Item rating matrix (5 users, 6 items)
# 0 = not rated
R = np.array([
    [5, 3, 0, 1, 0, 0],
    [4, 0, 0, 1, 0, 0],
    [1, 1, 0, 5, 0, 0],
    [1, 0, 0, 4, 0, 0],
    [0, 1, 5, 4, 0, 5],
], dtype=float)

print("Rating matrix R (0 = missing):")
print(R)
print()

# Simple matrix factorization: R ≈ UV^T
n_users, n_items = R.shape
k = 2  # Latent factors

# Initialize factors
np.random.seed(42)
U = np.random.rand(n_users, k)
V = np.random.rand(n_items, k)

# Training parameters
learning_rate = 0.01
regularization = 0.01
epochs = 1000

# Get indices of known ratings
known = R > 0

for epoch in range(epochs):
    # Predictions
    R_pred = U @ V.T

    # Compute error only on known ratings
    error = np.zeros_like(R)
    error[known] = R[known] - R_pred[known]

    # Gradient descent
    U += learning_rate * (error @ V - regularization * U)
    V += learning_rate * (error.T @ U - regularization * V)

    # Compute loss
    loss = np.sum(error[known]**2) + regularization * (np.sum(U**2) + np.sum(V**2))

    if (epoch + 1) % 200 == 0:
        rmse = np.sqrt(np.mean(error[known]**2))
        print(f"Epoch {epoch+1}: RMSE={rmse:.4f}")

print("\\nFinal predictions:")
R_final = U @ V.T
print(R_final)
print()

print("Predicted missing ratings:")
for i in range(n_users):
    for j in range(n_items):
        if R[i, j] == 0:
            print(f"User {i+1}, Item {j+1}: {R_final[i, j]:.2f}")`}
        />
      </Section>

      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Key Takeaways
        </h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>• Vectors & Matrices:</strong> Represent data, features, and parameters
          </li>
          <li>
            <strong>• Eigendecomposition:</strong> Powers PCA, spectral clustering, PageRank
          </li>
          <li>
            <strong>• SVD:</strong> More stable than eigendecomposition, used in recommender systems, LSA
          </li>
          <li>
            <strong>• Matrix Multiplication:</strong> Core operation in neural networks
          </li>
          <li>
            <strong>• Linear Systems:</strong> Solved in linear regression, optimization
          </li>
          <li>
            <strong>• Orthogonality:</strong> Independent features, decorrelated components
          </li>
        </ul>
      </div>
    </div>
  )
}
