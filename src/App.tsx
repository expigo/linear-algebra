import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VectorsPage from './pages/chapters/VectorsPage'
import MatricesPage from './pages/chapters/MatricesPage'
import LinearSystemsPage from './pages/chapters/LinearSystemsPage'
import VectorSpacesPage from './pages/chapters/VectorSpacesPage'
import EigenPage from './pages/chapters/EigenPage'
import OrthogonalityPage from './pages/chapters/OrthogonalityPage'
import SVDPage from './pages/chapters/SVDPage'
import TransformationsPage from './pages/chapters/TransformationsPage'
import MatrixCalculusPage from './pages/chapters/MatrixCalculusPage'
import ProjectionsPage from './pages/chapters/ProjectionsPage'
import MLApplicationsPage from './pages/MLApplicationsPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vectors" element={<VectorsPage />} />
          <Route path="/matrices" element={<MatricesPage />} />
          <Route path="/linear-systems" element={<LinearSystemsPage />} />
          <Route path="/vector-spaces" element={<VectorSpacesPage />} />
          <Route path="/eigenvalues" element={<EigenPage />} />
          <Route path="/orthogonality" element={<OrthogonalityPage />} />
          <Route path="/svd" element={<SVDPage />} />
          <Route path="/transformations" element={<TransformationsPage />} />
          <Route path="/matrix-calculus" element={<MatrixCalculusPage />} />
          <Route path="/projections" element={<ProjectionsPage />} />
          <Route path="/ml-applications" element={<MLApplicationsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
