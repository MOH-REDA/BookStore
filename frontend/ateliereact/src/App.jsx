import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { KeycloakProvider } from './context/KeycloakProvider'
import { ProtectedRoute } from './components/ProtectedRoute'
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BookDetail from './pages/BookDetail'
import BookEdit from './pages/BookEdit'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <KeycloakProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Protected routes - require authentication */}
            <Route path="/books" element={
              <ProtectedRoute>
                <BooksPage />
              </ProtectedRoute>
            } />
            <Route path="/books/:id" element={
              <ProtectedRoute>
                <BookDetail />
              </ProtectedRoute>
            } />
            
            {/* Admin only routes */}
            <Route path="/books/add" element={
              <ProtectedRoute requiredRole="ADMIN">
                <BookEdit />
              </ProtectedRoute>
            } />
            <Route path="/books/edit/:id" element={
              <ProtectedRoute requiredRole="ADMIN">
                <BookEdit />
              </ProtectedRoute>
            } />
            <Route path="/categories" element={
              <ProtectedRoute requiredRole="ADMIN">
                <CategoryPage />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </KeycloakProvider>
  )
}

export default App