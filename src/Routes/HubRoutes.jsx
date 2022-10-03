/* Imported Routes */
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import { Routes, Route } from "react-router-dom";

const HubRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};

export default HubRoutes;
