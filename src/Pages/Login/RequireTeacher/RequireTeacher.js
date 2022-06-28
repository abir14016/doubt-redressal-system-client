import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseTeacher from '../../../Hooks/UseTeacher';
import Loading from '../../Shared/Loading/Loading';


const RequireTeacher = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [teacher, adminLoading] = UseTeacher(user);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !teacher) {
        // signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireTeacher;