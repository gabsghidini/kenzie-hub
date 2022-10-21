import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../Services/API";
import React from "react";
import * as i from "./types";

export const UserContext = createContext<i.UserProviderData>(
	{} as i.UserProviderData
);

const UserProvider = ({ children }: i.UserProviderProps) => {
	const [user, setUser] = useState<i.User>({} as i.User);
	const [token, setToken] = useState<string>();
	const [isUpdating, setIsUpdating] = useState(false);

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function updateUser() {
			const storageToken = localStorage.getItem("@TOKEN");

			if (storageToken) {
				try {
					API.defaults.headers.Authorization = `Bearer ${storageToken}`;

					const { data } = await API.get("/profile");

					setUser(data);
				} catch (error) {
					console.error(error);
				}
			}

			setLoading(false);
		}

		updateUser();
	}, []);

	/* Toasts functions */
	const showErrorToast = (error: string) => {
		toast.error(`${error}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const showSuccessToast = (message: string) => {
		toast.success(`${message}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	/* Router Dom functions */
	const handleRedirect = (redirectTo: string) => {
		navigate(`/${redirectTo}`);
	};

	/* API */
	function userLogin(user: i.LoginUser) {
		try {
			API.post("/sessions", user).then((res) => {
				localStorage.clear();

				const user = res.data.user;
				const token = res.data.token;
				const userID = user.id;
				const techs = user.techs;
				setToken(token);
				setUser(user);

				localStorage.setItem("@User", JSON.stringify(user));
				localStorage.setItem("@TOKEN", token);
				localStorage.setItem("@UserID", userID);
				localStorage.setItem("@Techs", JSON.stringify(techs));

				showSuccessToast(
					"Login feito com sucesso! Você será redirecionado para a página inicial em até 5 segundos."
				);

				setTimeout(() => {
					handleRedirect("dashboard");
				}, 3000);
			});
		} catch (error) {
			showErrorToast(
				"Email ou senha incorretos, verifique os dados e tente novamente."
			);
		}
	}

	function userRegister(user: i.RegisterUser) {
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

	const addTech = (tech: i.NewTech) => {
		try {
			API.post("/users/techs", tech, config);
			//showSuccessToast("Tecnologia adicionada com sucesso!");
		} catch (error) {
			showErrorToast("Opa, algo deu errado.");
		}
	};

	function deleteTech(id: string) {
		try {
			API.delete(`/users/techs/${id}`, config);
			showSuccessToast("Tecnologia deletada com sucesso!");
		} catch (error) {
			console.error(error);
		}
	}

	function updateTechs() {
		setIsUpdating(true);
		try {
			API.get("/profile", config).then((res) =>
				localStorage.setItem("@Techs", JSON.stringify(res.data.techs))
			);
			setIsUpdating(false);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<UserContext.Provider
			value={{
				user,
				showErrorToast,
				showSuccessToast,
				handleRedirect,
				userLogin,
				userRegister,
				addTech,
				deleteTech,
				updateTechs,
				isUpdating,
				loading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
