import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/UseAdmin/useAdmin';
import useSeller from '../../Hooks/useSeller/useSeller';
import Loading from '../../Pages/Loading/Loading';

const SellerPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default SellerPrivateRoute;