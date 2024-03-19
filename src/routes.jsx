import { Routes, Route} from "react-router-dom";
import { Login } from './pages/SignIn/SignIn.jsx';
import { SignUp } from './pages/signUp/SignUp.jsx';
import { ListOfCourses } from './pages/ListOfCourses/ListOfCourses.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';

// import Profile from "pages/Profile/index.jsx";
import { ChooseCourse } from "pages/ChooseCourse/chooseCourse.jsx";
import { PersonalPage } from "pages/personal/personalPage.jsx";


export const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<ListOfCourses />}></Route>
        
      

        <Route path="/PersonalPage" element={<PersonalPage />} />

        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/login" element={<Login />}></Route>
       
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>

        <Route path="/selectworkout/:id" element={<ChooseCourse />} />
    </Routes>
    )
}