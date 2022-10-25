import * as yup from "yup";

interface iLogin {
	email: string;
	password: string;
}

type iLoginKeys = keyof iLogin;

export const loginSchema = yup.object().shape({
	email: yup.string().email("Email inválido").required("Email obrigatório"),
	password: yup.string().required("Senha obrigatória"),
} as Record<iLoginKeys, any>);
