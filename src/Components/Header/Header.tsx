import * as S from "./styles";
import * as i from "../../Contexts/types";

const Header = () => {
	const user: i.User = JSON.parse(localStorage.getItem("@User"));
	const name = user.name;
	const module = user.course_module;

	return (
		<S.Container>
			<S.Header>
				<h1>Olá, {name}</h1>
				<p>{module}</p>
			</S.Header>
		</S.Container>
	);
};

export default Header;
