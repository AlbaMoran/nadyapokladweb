import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {

    let { user } = useUserAuth();
    
    if (user === null) {
        return <Navigate to="/admin" />;
    }
    return children;
}

export default ProtectedRoute;