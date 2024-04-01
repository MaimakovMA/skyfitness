import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/SignIn/SignIn.jsx'
import { ListOfCourses } from './pages/ListOfCourses/ListOfCourses.jsx'
import { NotFoundPage } from './pages/NotFound/NotFound.jsx'
import { ChooseCourse } from 'pages/ChooseCourse/chooseCourse.jsx'
import Profile from 'pages/Profile/index.jsx'
import { WorkoutVideoPage } from 'pages/workout-video/index.js'
import { SignUp } from 'pages/SignUp/SignUp.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ListOfCourses />}></Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/workout/:id" element={<WorkoutVideoPage />} />
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/selectworkout/:id" element={<ChooseCourse />} />
    </Routes>
  )
}
