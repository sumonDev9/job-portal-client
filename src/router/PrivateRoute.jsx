import  {  useContext } from 'react';
import AuthContex from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
        if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return  <Navigate to="/signin" state={location?.pathname}></Navigate>
    
};

export default PrivateRoute;