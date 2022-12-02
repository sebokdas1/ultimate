import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireUser = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken')
    const location = useLocation();
    if (!accessToken) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireUser;