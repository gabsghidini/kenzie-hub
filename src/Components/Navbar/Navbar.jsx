import { useNavigate } from "react-router-dom";
import logo from "../../Assets/hub.png";
import * as S from "./styles";

const Navbar = () => {
	const navigate = useNavigate();

	const returnToLogin = () => {
		return navigate("/");
	};
	return (
		<S.NavContainer>
			<S.Nav>
				<img src={logo} alt="Kenzie Hub" />
				<S.Logout
					onClick={() => {
						localStorage.clear();
						returnToLogin();
					}}
				>
					Logout
				</S.Logout>
			</S.Nav>
		</S.NavContainer>
	);
};

export default Navbar;
