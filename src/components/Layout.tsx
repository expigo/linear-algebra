import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, BookOpen, Home } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

interface NavItem {
  path: string
  label: string
  chapter?: number
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/vectors', label: 'Vectors', chapter: 1 },
  { path: '/matrices', label: 'Matrices', chapter: 2 },
  { path: '/linear-systems', label: 'Linear Systems', chapter: 3 },
  { path: '/vector-spaces', label: 'Vector Spaces', chapter: 4 },
  { path: '/eigenvalues', label: 'Eigenvalues & Eigenvectors', chapter: 5 },
  { path: '/orthogonality', label: 'Orthogonality', chapter: 6 },
  { path: '/svd', label: 'SVD', chapter: 7 },
  { path: '/transformations', label: 'Linear Transformations', chapter: 8 },
  { path: '/ml-applications', label: 'ML Applications' },
]

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
                >
                  {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Link to="/" className="flex items-center ml-2 lg:ml-0">
                  <BookOpen className="text-primary-600 dark:text-primary-400" size={32} />
                  <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                    Linear Algebra
                  </h1>
                </Link>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)]
              w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
              overflow-y-auto transition-transform duration-300 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}
          >
            <nav className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center px-4 py-3 rounded-lg text-sm font-medium
                      ${
                        isActive
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {item.path === '/' && <Home size={18} className="mr-3" />}
                    {item.chapter && (
                      <span className="mr-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {item.chapter}
                      </span>
                    )}
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
