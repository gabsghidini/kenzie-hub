import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const { user, loading } = useContext(UserContext);

	if (loading) {
		return null;
	}

	return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
