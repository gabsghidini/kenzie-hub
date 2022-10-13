/* Styles */
import Logo from "../../Assets/hub.png";
import * as S from "./styles";
/* Toasts */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Form */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
/* Schema */
import { loginSchema } from "../../Validations/loginValidation";
/* Context */
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
	const { userLogin } = useContext(UserContext);

	/* Forms */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const onSubmitFunction = (data) => {
		userLogin(data);
	};

	return (
		<S.Wrapper>
			<img src={Logo} alt="Kenzie Hub logo" />
			<S.Form onSubmit={handleSubmit(onSubmitFunction)}>
				<S.Title>Login</S.Title>
				<label>Email</label>
				<S.Input
					type="text"
					placeholder="eevee@gmail.com"
					{...register("email")}
				/>
				{errors.email?.message}
				<label>Senha</label>
				<S.Input
					type="password"
					placeholder="S3nh4 Sup3r S3cr3t4"
					{...register("password")}
				/>
				{errors.password?.message}
				<S.LoginButton type="submit">Entrar</S.LoginButton>
				<S.HeadlineBoldSmall className="bold">
					Ainda não possui uma conta?
				</S.HeadlineBoldSmall>
				<S.RegisterButton to="/register">Cadastre-se</S.RegisterButton>
			</S.Form>
			<ToastContainer />
		</S.Wrapper>
	);
};

export default Login;
