import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Navbar = () => {
	const navigate = useNavigate();

	const returnToLogin = () => {
		return navigate("/");
	};
	return (
		<S.Nav>
			<S.Container>
				<img src="./assets/img/Logo.svg" alt="Kenzie Hub" />
				<S.Logout
					onClick={() => {
						localStorage.clear();
						returnToLogin();
					}}
				>
					Logout
				</S.Logout>
			</S.Container>
		</S.Nav>
	);
};

export default Navbar;
