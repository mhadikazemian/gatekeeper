import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/account" element={<h1>Account</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
