# Linear Algebra - Interactive Learning Platform

A comprehensive, interactive website for learning Linear Algebra with a focus on Machine Learning, Deep Learning, and Data Science applications.

## Features

### 🎓 Rigorous Theory
- Complete coverage of linear algebra fundamentals
- Mathematical definitions, theorems, and proofs
- Clear explanations with examples

### 📊 Interactive Visualizations
- 2D and 3D vector plots using Plotly.js
- Interactive matrix transformations
- Geometric interpretations of abstract concepts

### 💻 Python Integration
- Interactive Python code editor powered by Pyodide
- Run NumPy code directly in your browser
- No installation required!

### 🧠 ML/DL Applications
- Principal Component Analysis (PCA)
- Singular Value Decomposition (SVD)
- Neural Networks
- Recommender Systems
- Image Classification
- And more!

### ✅ Learning Tools
- Interactive quizzes with explanations
- Exercises with hints and solutions
- Real-world examples

## Course Outline

1. **Vectors** - Operations, dot product, norms, geometric interpretation
2. **Matrices** - Operations, special matrices, inverse, transpose
3. **Linear Systems** - Gaussian elimination, LU decomposition, applications
4. **Vector Spaces** - Subspaces, basis, dimension, linear independence
5. **Eigenvalues & Eigenvectors** - Diagonalization, spectral theorem, PCA
6. **Orthogonality** - Gram-Schmidt, QR decomposition, orthogonal projections
7. **Singular Value Decomposition** - SVD theory, low-rank approximation, applications
8. **Linear Transformations** - Geometric view, rotations, scaling
9. **ML Applications** - Complete guide to using linear algebra in ML/DL

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Math Rendering:** KaTeX
- **Visualizations:** Plotly.js
- **Python Runtime:** Pyodide (Python 3.11 in browser)
- **Styling:** Tailwind CSS
- **Code Highlighting:** Prism.js

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## Project Structure

```
linear-algebra/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.tsx       # Main layout with navigation
│   │   ├── MathBlock.tsx    # LaTeX math rendering
│   │   ├── CodeBlock.tsx    # Syntax-highlighted code
│   │   ├── PythonEditor.tsx # Interactive Python editor
│   │   ├── VectorPlot3D.tsx # 3D vector visualizations
│   │   ├── Quiz.tsx         # Interactive quiz component
│   │   ├── Exercise.tsx     # Exercise with solutions
│   │   ├── Section.tsx      # Content sections
│   │   └── Definition.tsx   # Math definitions/theorems
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   ├── chapters/        # Chapter pages
│   │   │   ├── VectorsPage.tsx
│   │   │   ├── MatricesPage.tsx
│   │   │   ├── EigenPage.tsx
│   │   │   ├── SVDPage.tsx
│   │   │   └── ...
│   │   └── MLApplicationsPage.tsx
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features in Detail

### Interactive Python Editor

Run Python code with NumPy directly in your browser:

```python
import numpy as np

# Create vectors
u = np.array([1, 2, 3])
v = np.array([4, 5, 6])

# Compute dot product
print(np.dot(u, v))
```

### Math Rendering

Beautiful LaTeX rendering with KaTeX:

```latex
\mathbf{A}\mathbf{x} = \lambda\mathbf{x}
```

### Visualizations

Interactive 2D and 3D plots to visualize vectors, transformations, and more.

### Quizzes

Test your understanding with interactive quizzes that provide instant feedback and explanations.

## Learning Path

For aspiring ML/DL researchers, we recommend this path:

1. Start with **Vectors** and **Matrices** for fundamentals
2. Learn **Linear Systems** to understand solving equations
3. Study **Eigenvalues & Eigenvectors** (crucial for PCA)
4. Master **SVD** (essential for many ML algorithms)
5. Explore **ML Applications** to see theory in practice

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- WebAssembly support (for Pyodide)

## Contributing

This is an educational project. Suggestions and improvements are welcome!

## License

MIT License - feel free to use for learning and teaching.

## Acknowledgments

- Built with modern web technologies
- Math rendering by KaTeX
- Python in browser via Pyodide
- Visualizations with Plotly.js

## Support

For questions or issues, please open an issue on GitHub.

---

**Happy Learning! 🚀**

Master linear algebra and unlock the mathematical foundations of Machine Learning and Deep Learning.
