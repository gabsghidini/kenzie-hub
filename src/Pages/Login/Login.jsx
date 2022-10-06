import Logo from "../../assets/hub.png";
import * as S from "./styles";

const Login = () => {
	return (
		<S.Wrapper>
			<img src={Logo} alt="Kenzie Hub logo" />
			<S.Form>
				<S.Title>Login</S.Title>
				<label>Email</label>
				<S.Input type="text" placeholder="eevee@gmail.com" />
				<label>Senha</label>
				<S.Input type="text" placeholder="S3nh4 Sup3r S3cr3t4" />
				<S.LoginButton>Entrar</S.LoginButton>
				<S.HeadlineBoldSmall className="bold">
					Ainda não possui uma conta?
				</S.HeadlineBoldSmall>
				<S.RegisterButton>Cadastre-se</S.RegisterButton>
			</S.Form>
		</S.Wrapper>
	);
};

export default Login;
