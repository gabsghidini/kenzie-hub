import Logo from "../../Assets/hub.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = useState(null);
	const [bio, setBio] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [contacts, setContacts] = useState(null);
	const [module, setModule] = useState(null);
	const [passwordConfirmation, setPasswordConfirmation] = useState(null);
	const data = {
		name: name,
		bio: bio,
		contact: contacts,
		email: email,
		course_module: module
			? module
			: "Primeiro módulo (Introdução ao Frontend)",
		password: password === passwordConfirmation ? password : null,
	};

	const handleRegister = (e) => {
		e.preventDefault();

		console.log(data);
	};

	const handleRedirect = () => {
		navigate("/");
	};
	return (
		<S.Wrapper>
			<img src={Logo} alt="Kenzie Hub logo" />
			<S.Form>
				<S.Title>Registro</S.Title>
				<label>Nome completo</label>
				<S.Input
					type="text"
					placeholder="Eevee Saura Rex"
					onChange={(e) => setName(e.target.value)}
				/>
				<label>Biografia</label>
				<S.Input
					type="text"
					placeholder="Sou uma gatinha programadora"
					onChange={(e) => setBio(e.target.value)}
				/>
				<label>Contatos</label>
				<S.Input
					type="text"
					placeholder="https://www.linkedin.com/in/deevee/"
					onChange={(e) => setContacts(e.target.value)}
				/>
				<label>Selecionar Módulo</label>
				<S.StyledSelect onChange={(e) => setModule(e.target.value)}>
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
				<label>Confirme sua senha</label>
				<S.Input
					type="password"
					placeholder="S3nh4 Sup3r S3cr3t4"
					onChange={(e) => setPasswordConfirmation(e.target.value)}
				/>
				<S.LoginButton type="submit" onClick={handleRegister}>
					Cadastrar
				</S.LoginButton>
				<S.HeadlineBoldSmall className="bold">
					Já possui uma conta?
				</S.HeadlineBoldSmall>
				<S.RegisterButton onClick={handleRedirect}>
					Faça Login
				</S.RegisterButton>
			</S.Form>
		</S.Wrapper>
	);
};

export default Register;
