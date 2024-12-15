import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = '/login' }) => {
    const isAuthenticated = localStorage.getItem("accessToken")
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;