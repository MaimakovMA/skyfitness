import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'

// import Acquaint from './pages/acquaint/acquaint'
// import AuthPage from './pages/Authpage/AuthPage'
// import ProtectedRoute from './components/ProtectedRoute/protected-route'
// import Main from './pages/Main/Main'
// import TrainingPage from './pages/training/training'

export default function AppRoutes() {
  return (
    
    <Routes>
      
      <Route path="/profile" element={<Profile />} />
      
    </Routes>
  )
}