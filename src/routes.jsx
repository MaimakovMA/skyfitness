import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/SignIn/SignIn.jsx'
import { SignUp } from './pages/signUp/SignUp.jsx'
import { ListOfCourses } from './pages/ListOfCourses/ListOfCourses.jsx'
import { NotFoundPage } from './pages/NotFound/NotFound.jsx'
import { ChooseCourse } from 'pages/ChooseCourse/chooseCourse.jsx'
import Profile from "pages/Profile/index.jsx";
import { WorkoutVideoPage } from "pages/workout-video/index.js";
import { useSelector } from "react-redux";
import { selectUsers } from "store/slices/userSlice.js";


export const AppRoutes = () => {

    const user = useSelector(selectUsers);

    return  (  <>
        {user.currentUser ? 
    <Routes>
        <Route path='/' element={<ListOfCourses />}></Route> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/workout/:id" element={<WorkoutVideoPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/selectworkout/:id" element={<ChooseCourse />} />
        <Route path="*" element={<NotFoundPage />}></Route>   
    </Routes> : <Login />
        }
   </> )
}
