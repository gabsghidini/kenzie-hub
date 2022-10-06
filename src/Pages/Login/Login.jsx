import Logo from "../../assets/hub.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const data = {
		email: email,
		password: password,
	};

	const handleLogin = (e) => {
		e.preventDefault();

		console.log(data);
	};

	const handleRedirect = () => {
		navigate("/register");
	};
	return (
		<S.Wrapper>
			<img src={Logo} alt="Kenzie Hub logo" />
			<S.Form>
				<S.Title>Login</S.Title>
				<label>Email</label>
				<S.Input
					type="text"
					placeholder="eevee@gmail.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Senha</label>
				<S.Input
					type="password"
					placeholder="S3nh4 Sup3r S3cr3t4"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<S.LoginButton type="submit" onClick={handleLogin}>
					Entrar
				</S.LoginButton>
				<S.HeadlineBoldSmall className="bold">
					Ainda não possui uma conta?
				</S.HeadlineBoldSmall>
				<S.RegisterButton onClick={handleRedirect}>
					Cadastre-se
				</S.RegisterButton>
			</S.Form>
		</S.Wrapper>
	);
};

export default Login;
