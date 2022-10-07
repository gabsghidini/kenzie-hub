import * as S from "./styles";

const Header = () => {
	const user = JSON.parse(localStorage.getItem("@User"));
	const name = user.name;
	const module = user.course_module;

	return (
		<S.Header>
			<S.Container>
				<h1>Olá, {name}</h1>
				<p>{module}</p>
			</S.Container>
		</S.Header>
	);
};

export default Header;
