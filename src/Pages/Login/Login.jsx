/* Router Dom */
import { useNavigate } from "react-router-dom";
/* Styles */
import Logo from "../../Assets/hub.png";
import * as S from "./styles";
/* Toasts */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Form */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
/* API */
import API from "../../Services/API";
import { loginSchema } from "../../Validations/loginValidation";

const Login = () => {
	const navigate = useNavigate();

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

	/* Toasts functions */
	const showErrorToast = (error) => {
		toast.error(`${error}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const showSuccessToast = () => {
		toast.success(
			"Login feito com sucesso, você será redirecionado à dashboard em até 5 segundos.",
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);
	};

	/* API */
	function userLogin(user) {
		API.post("/sessions", user)
			.then((res) => {
				localStorage.clear();

				const user = res.data.user;
				const token = res.data.token;
				const userID = user.id;

				localStorage.setItem("@User", JSON.stringify(user));
				localStorage.setItem("@TOKEN", token);
				localStorage.setItem("@UserID", userID);

				showSuccessToast();

				setTimeout(() => {
					handleRedirect("dashboard");
				}, 5000);
			})
			.catch((error) =>
				showErrorToast(
					"Email ou senha incorretos, verifique os dados e tente novamente."
				)
			);
	}

	const handleRedirect = (redirectTo) => {
		navigate(`/${redirectTo}`);
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
				<S.RegisterButton onClick={() => handleRedirect("register")}>
					Cadastre-se
				</S.RegisterButton>
			</S.Form>
			<ToastContainer />
		</S.Wrapper>
	);
};

export default Login;
