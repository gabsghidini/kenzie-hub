import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../Services/API";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
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

				localStorage.setItem("@User", JSON.stringify(user));
				localStorage.setItem("@TOKEN", token);
				localStorage.setItem("@UserID", userID);

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

	return (
		<UserContext.Provider
			value={{
				showErrorToast,
				showSuccessToast,
				handleRedirect,
				userLogin,
				userRegister,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
