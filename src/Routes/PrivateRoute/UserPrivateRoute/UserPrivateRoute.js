import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useJustUser from '../../../Hooks/useJustUser/useJustUser';
import Loading from '../../../Pages/Loading/Loading';


const UserPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, userLoading] = useJustUser(user?.email);
    const location = useLocation();

    if (loading || userLoading) {
        return <Loading></Loading>
    }

    if (!isUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default UserPrivateRoute;