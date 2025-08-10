import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AuthProvider, useAuth } from './context/AuthProvider'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo/client'
import LoginPage from './pages/Login'
import { Layout } from 'antd'
import AccountPage from './pages/Account'
import { Toaster } from 'react-hot-toast'
import { AppHeader } from './components/AppHeader'
import { AppFooter } from './components/AppFooter'
import { ThemeProvider, useTheme } from './context/ThemeProvider'
import { I18nProvider } from './context/I18nProvider'

function AppRoutes() {
  const { token } = useAuth();
  const { darkMode } = useTheme();

  return (
    <BrowserRouter>
      <Layout className={`app-layout ${darkMode ? "dark-mode" : ""}`}>
        <AppHeader />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={token ? <Navigate to="/account" replace /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={token ? <Navigate to="/account" replace /> : <LoginPage />} />
            <Route path="/account" element={token ? <AccountPage /> : <Navigate to="/login" replace />} />
          </Routes>
          <Toaster />
        </ErrorBoundary>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
