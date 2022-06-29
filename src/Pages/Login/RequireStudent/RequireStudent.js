import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseStudent from '../../../Hooks/UseStudent';
import Loading from '../../Shared/Loading/Loading';


const RequireStudent = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [student, studentLoading] = UseStudent(user);
    const location = useLocation();
    if (loading || studentLoading) {
        return <Loading></Loading>
    }
    if (!user || !student) {
        // signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireStudent;