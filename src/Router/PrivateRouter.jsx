import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)

    // const location = useLocation()

    if(user && user.email){
        return children
    }

    return <Navigate to='/'></Navigate>
};

export default PrivateRouter;