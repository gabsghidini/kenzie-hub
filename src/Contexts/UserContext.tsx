import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../Services/API";
import * as i from "./types";

export const UserContext = createContext<i.UserProviderData>(
	{} as i.UserProviderData
);

const UserProvider = ({ children }: i.UserProviderProps) => {
	const [user, setUser] = useState<i.User>({} as i.User);
	const [token, setToken] = useState<string>();
	const [isUpdating, setIsUpdating] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	useEffect(() => {
		async function updateUser() {
			const token = localStorage.getItem("@TOKEN");
			if (token) {
				handleRedirect("dashboard");
			}
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
	async function userLogin(user: i.LoginUser) {
		try {
			const response: i.LoginUserResponse = await API.post(
				"/sessions",
				user
			);

			localStorage.clear();

			const data = response.data;

			setToken(data.token);
			setUser(data.user);

			localStorage.setItem("@TOKEN", data.token);
			localStorage.setItem("@User", JSON.stringify(data.user));
			localStorage.setItem("@UserID", data.user.id);
			localStorage.setItem("@Techs", JSON.stringify(data.user.techs));

			showSuccessToast("Login realizado com sucesso!");

			handleRedirect("dashboard");
		} catch (error) {
			const err = error as i.Error;
			if (err.response.status === 500) {
				showErrorToast(
					"Erro interno do servidor, tente novamente mais tarde."
				);
			} else if (err.response.status === 400) {
				showErrorToast(
					"Erro ao cadastrar usuário: dados inválidos, verifique seu email e senha."
				);
			} else {
				showErrorToast(
					"Erro ao cadastrar usuário, verifique se os dados estão corretos."
				);
			}
		}
	}

	async function userRegister(user: i.RegisterUser) {
		try {
			const response: i.RegisterUserResponse = await API.post(
				"/users",
				user
			);
			localStorage.clear();

			if (response) {
				showSuccessToast(
					"Cadastro realizado com sucesso! Você já pode fazer login."
				);
			}
		} catch (error) {
			const err = error as i.Error;
			if (err.response.status === 500) {
				showErrorToast(
					"Erro interno do servidor, tente novamente mais tarde."
				);
			} else if (err.response.status === 401) {
				showErrorToast(
					"Erro ao cadastrar usuário: email já cadastrado."
				);
			} else if (err.response.status === 400) {
				showErrorToast(
					"Erro ao cadastrar usuário: dados inválidos, verifique se todos os dados estão preenchidos corretamente."
				);
			} else {
				showErrorToast(
					"Erro ao cadastrar usuário, verifique se os dados estão corretos."
				);
			}
		}
	}

	const addTech = async (tech: i.NewTech) => {
		try {
			const response: i.NewTechResponse = await API.post(
				"/users/techs",
				tech,
				config
			);

			if (response) {
				return null;
			}
		} catch (error) {
			const err = error as i.Error;
			if (err.response.status === 500) {
				showErrorToast("Erro interno do servidor");
			} else if (err.response.status === 400) {
				showErrorToast(
					"Erro ao adicionar tecnologia, verifique se você já não possui essa tecnologia cadastrada."
				);
			}
		}
	};

	async function deleteTech(id: string) {
		try {
			const response: i.DeleteTechResponse = await API.delete(
				`/users/techs/${id}`,
				config
			);

			if (response) {
				showSuccessToast("Tecnologia deletada com sucesso!");
			}
		} catch (error) {
			const err = error as i.Error;
			if (err.response.status === 500) {
				showErrorToast("Erro interno do servidor");
			}
		}
	}

	function updateTechs() {
		setIsUpdating(true);
		try {
			API.get<i.User>("/profile", config).then((res) =>
				localStorage.setItem("@Techs", JSON.stringify(res.data.techs))
			);
			setIsUpdating(false);
		} catch (error) {
			const err = error as i.Error;
			if (err.response.status === 500) {
				showErrorToast("Erro interno do servidor");
			}
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
