import { Routes, Route } from "react-router-dom";
import { Login } from './pages/SignIn/SignIn.jsx';
import { SignUp } from './pages/signUp/SignUp.jsx';
import { ListOfCourses } from './pages/ListOfCourses/ListOfCourses.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';

export const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<ListOfCourses />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
    )
}