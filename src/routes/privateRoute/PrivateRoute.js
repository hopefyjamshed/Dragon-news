import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { isRouteErrorResponse, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner className='text-center' animation="grow" />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;