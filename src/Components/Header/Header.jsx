import * as S from "./styles";

const Header = () => {
	const user = JSON.parse(localStorage.getItem("@User"));
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
