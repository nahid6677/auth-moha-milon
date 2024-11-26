import React, { useContext } from 'react';
import { MyCreateContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyCreateContext);

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>;
    }
    if(user){
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;