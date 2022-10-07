import Logo from "../../Assets/hub.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
/* Toasts */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Form */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
/* API */
import API from "../../Services/API";
import { registerSchema } from "../../Validations/registerValidation";

const Register = () => {
	const navigate = useNavigate();
	/* Forms */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(registerSchema),
	});

	const handleRedirect = (redirectTo) => {
		navigate(`/${redirectTo}`);
	};

	const onSubmitFunction = (data) => {
		userRegister(data);
	};

	function userRegister(user) {
		API.post("/users", user)
			.then((res) => {
				localStorage.clear();
				localStorage.setItem("@User", res.data.user);
				showSuccessToast();

				setTimeout(() => {
					handleRedirect("");
				}, 3000);
			})
			.catch((error) =>
				showErrorToast(
					"Opa, verifique se todos os campos estão preenchidos ou se o email já não existe."
				)
			);
	}

	/* Toasts functions */
	const showErrorToast = (error) => {
		toast.error(`${error}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const showSuccessToast = () => {
		toast.success(
			"Registro feito com sucesso, você será redirecionado ao login em até 3 segundos.",
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);
	};
	return (
		<S.Wrapper>
			<img src={Logo} alt="Kenzie Hub logo" />
			<S.Form onSubmit={handleSubmit(onSubmitFunction)}>
				<S.Title>Registro</S.Title>
				<label>Nome completo</label>
				<S.Input
					type="text"
					placeholder="Eevee Saura Rex"
					{...register("name")}
				/>
				{errors.name?.message}
				<label>Biografia</label>
				<S.Input
					type="text"
					placeholder="Sou uma gatinha programadora"
					{...register("bio")}
				/>
				{errors.bio?.message}
				<label>Contatos</label>
				<S.Input
					type="text"
					placeholder="https://www.linkedin.com/in/deevee/"
					{...register("contact")}
				/>
				{errors.contacts?.message}
				<label>Selecionar Módulo</label>
				<S.StyledSelect {...register("course_module")}>
					<option value="Primeiro módulo (Introdução ao Frontend)">
						Primeiro módulo (Introdução ao Frontend)
					</option>
					<option value="Segundo módulo (Frontend Avançado)">
						Segundo módulo (Frontend Avançado)
					</option>
					<option value="Terceiro módulo (Introdução ao Backend)">
						Terceiro módulo (Introdução ao Backend)
					</option>
					<option value="Quarto módulo (Backend Avançado)">
						Quarto módulo (Backend Avançado)
					</option>
				</S.StyledSelect>
				{errors.course_module?.message}
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
				<label>Confirme sua senha</label>
				<S.Input
					type="password"
					placeholder="S3nh4 Sup3r S3cr3t4"
					{...register("passwordConfirmation")}
				/>
				{errors.passwordConfirmation?.message}
				<S.LoginButton type="submit">Cadastrar</S.LoginButton>
				<S.HeadlineBoldSmall className="bold">
					Já possui uma conta?
				</S.HeadlineBoldSmall>
				<S.RegisterButton onClick={() => handleRedirect("")}>
					Faça Login
				</S.RegisterButton>
			</S.Form>
			<ToastContainer />
		</S.Wrapper>
	);
};

export default Register;
