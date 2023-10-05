import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default PrivateRouts;

