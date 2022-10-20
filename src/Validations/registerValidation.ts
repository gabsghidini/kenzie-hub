import * as yup from "yup";

export const registerSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Email inválido").required("Email obrigatório"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(8, "Senha deve ter no mínimo 8 caracteres"),
	bio: yup.string().required("Bio obrigatória"),
	contact: yup.string().required("Contato obrigatório"),
	course_module: yup.string().required("Módulo obrigatório"),
});
