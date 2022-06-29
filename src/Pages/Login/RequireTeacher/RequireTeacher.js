import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseTeacher from '../../../Hooks/UseTeacher';
import Loading from '../../Shared/Loading/Loading';


const RequireTeacher = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [teacher, teacherLoading] = UseTeacher(user);
    const location = useLocation();
    if (loading || teacherLoading) {
        return <Loading></Loading>
    }
    if (!user || !teacher) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireTeacher;