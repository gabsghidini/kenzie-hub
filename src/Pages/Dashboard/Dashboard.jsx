import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Techs from "../../Components/Techs";
import { Container } from "./styles";
import ProtectedRoutes from "../../Components/ProtectedRoutes";

const Dashboard = () => {
	return (
		<Container>
			<ProtectedRoutes>
				<Navbar />
				<Header />
				<Techs />
			</ProtectedRoutes>
		</Container>
	);
};

export default Dashboard;
