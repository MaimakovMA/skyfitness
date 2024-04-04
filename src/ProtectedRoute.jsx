import { Navigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

export const ProtectedRoute = ({children, redirectPath = "/login"}) => {
    const auth = getAuth()

    const isAllowed = auth.currentUser ? true : false;

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return children;
}