import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Techs from "../../Components/Techs";
import { Container } from "./styles";

const Dashboard = () => {
	return (
		<Container>
			<Navbar />
			<Header />
			<Techs />
		</Container>
	);
};

export default Dashboard;
