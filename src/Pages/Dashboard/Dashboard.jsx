import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Techs from "../../Components/Techs";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
	return (
		<Container>
			<Navbar />
			<Header />
			<Techs />
			<ToastContainer />
		</Container>
	);
};

export default Dashboard;
