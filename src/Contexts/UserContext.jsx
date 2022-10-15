import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../Services/API";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [isUpdating, setIsUpdating] = useState(false);
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const navigate = useNavigate();

	/* Toasts functions */
	const showErrorToast = (error) => {
		toast.error(`${error}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const showSuccessToast = (message) => {
		toast.success(`${message}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	/* Router Dom functions */
	const handleRedirect = (redirectTo) => {
		navigate(`/${redirectTo}`);
	};

	/* API */
	function userLogin(user) {
		API.post("/sessions", user)
			.then((res) => {
				localStorage.clear();

				const user = res.data.user;
				const token = res.data.token;
				const userID = user.id;
				const techs = user.techs;
				setToken(token);

				localStorage.setItem("@User", JSON.stringify(user));
				localStorage.setItem("@TOKEN", token);
				localStorage.setItem("@UserID", userID);
				localStorage.setItem("@Techs", JSON.stringify(techs));

				showSuccessToast(
					"Login feito com sucesso! Você será redirecionado para a página inicial em até 5 segundos."
				);

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

	function userRegister(user) {
		API.post("/users", user)
			.then((res) => {
				localStorage.clear();
				localStorage.setItem("@User", res.data.user);
				showSuccessToast(
					"Registro feito com sucesso, você será redirecionado ao login em até 3 segundos."
				);

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

	const addTech = (tech) => {
		API.post("/users/techs", tech, config)
			.then((res) => {
				console.log(res);
				//showSuccessToast("Tecnologia adicionada com sucesso!");
			})
			.catch((error) => showErrorToast("Opa, algo deu errado."));
	};

	function deleteTech(id) {
		API.delete(`/users/techs/${id}`, config)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.error(error));
	}

	function updateTechs(message) {
		setIsUpdating(true);
		API.get("/profile", config).then(
			(res) => console.log(res),
			localStorage.setItem("@Techs", JSON.stringify(res.data.techs)),
			//showSuccessToast(message),
			setIsUpdating(false)
		);
	}

	return (
		<UserContext.Provider
			value={{
				showErrorToast,
				showSuccessToast,
				handleRedirect,
				userLogin,
				userRegister,
				addTech,
				deleteTech,
				updateTechs,
				isUpdating,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
