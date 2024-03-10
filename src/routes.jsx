import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './pages/profile/index'

export default function AppRoutes() {
  return (
    
    <Routes>
     <Route path="/" element={<Navigate replace to="/profile" />} /> 
      <Route path="/profile" element={<Profile />} />
      
    </Routes>
  )
}