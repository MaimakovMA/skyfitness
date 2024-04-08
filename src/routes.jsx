import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/SignIn/SignIn.jsx';
import { SignUp } from './pages/signUp/SignUp.jsx';
import { ListOfCourses } from './pages/ListOfCourses/ListOfCourses.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';
import { ChooseCourse } from 'pages/ChooseCourse/chooseCourse.jsx';
import { Profile } from "pages/Profile/index.jsx";
import { WorkoutVideoPage } from "pages/workout-video/index.js";
import { ProtectedRoute } from 'ProtectedRoute.jsx';

export const AppRoutes = () => {

return  (  
    <Routes>
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/SignUp" element={<SignUp />} />
    <Route path='/' element={<ListOfCourses />} />
    <Route path="/selectworkout/:id" element={<ChooseCourse />} />
    <Route path="/workout/:id" element={<ProtectedRoute><WorkoutVideoPage /></ProtectedRoute>} />
    <Route path="*" element={<NotFoundPage />}></Route> 
</Routes> 
  )
}
