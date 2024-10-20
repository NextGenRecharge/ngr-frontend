import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, redirectPath = '/dashboard' }) => {
    return !isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PublicRoute;