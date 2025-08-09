import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/account" element={<h1>Account</h1>} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
