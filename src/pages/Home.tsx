import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Code,
  Eye,
  Brain,
  CheckCircle
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Rigorous Theory',
    description: 'Deep dive into linear algebra with mathematical rigor, covering definitions, theorems, and proofs.'
  },
  {
    icon: Eye,
    title: 'Rich Visualizations',
    description: 'Interactive 2D and 3D visualizations to build geometric intuition for abstract concepts.'
  },
  {
    icon: Code,
    title: 'Python Integration',
    description: 'Run Python code directly in your browser with NumPy, explore computations hands-on.'
  },
  {
    icon: Brain,
    title: 'ML/DL Applications',
    description: 'Connect theory to practice with applications in Machine Learning, Deep Learning, and Data Science.'
  }
]

const chapters = [
  { number: 1, title: 'Vectors', path: '/vectors', description: 'Geometric and algebraic view of vectors, operations, and properties' },
  { number: 2, title: 'Matrices', path: '/matrices', description: 'Matrix operations, special matrices, and transformations' },
  { number: 3, title: 'Linear Systems', path: '/linear-systems', description: 'Solving systems of equations, Gaussian elimination, applications' },
  { number: 4, title: 'Vector Spaces', path: '/vector-spaces', description: 'Abstract spaces, subspaces, basis, and dimension' },
  { number: 5, title: 'Eigenvalues & Eigenvectors', path: '/eigenvalues', description: 'Characteristic equations, diagonalization, and ML applications' },
  { number: 6, title: 'Orthogonality', path: '/orthogonality', description: 'Orthogonal vectors, Gram-Schmidt, QR decomposition' },
  { number: 7, title: 'SVD', path: '/svd', description: 'Singular Value Decomposition and its applications in ML' },
  { number: 8, title: 'Linear Transformations', path: '/transformations', description: 'Geometric interpretation of linear maps' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Master Linear Algebra
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          A comprehensive, interactive course designed for aspiring researchers in Machine Learning,
          Deep Learning, and Data Science. Learn theory with rigorous mathematics, explore concepts
          through visualizations, and apply knowledge with Python.
        </p>
        <Link
          to="/vectors"
          className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-all hover:shadow-xl"
        >
          Start Learning
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <feature.icon className="text-primary-600 dark:text-primary-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* What You'll Learn */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          What You'll Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Vector and matrix operations',
            'Solving systems of linear equations',
            'Understanding vector spaces and subspaces',
            'Computing eigenvalues and eigenvectors',
            'Orthogonalization and decompositions',
            'Singular Value Decomposition (SVD)',
            'Linear transformations and their geometry',
            'Applications in PCA, dimensionality reduction',
            'Neural network mathematics',
            'Optimization in machine learning'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Course Outline
        </h2>
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter.number}
              to={chapter.path}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                    {chapter.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {chapter.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  size={24}
                />
              </div>
            </Link>
          ))}

          {/* ML Applications */}
          <Link
            to="/ml-applications"
            className="block p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Machine Learning Applications
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    PCA, dimensionality reduction, neural networks, and optimization
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                size={24}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p>Built with React, TypeScript, and Pyodide</p>
        <p className="text-sm mt-2">Interactive visualizations powered by Plotly.js</p>
      </div>
    </div>
  )
}
