import * as yup from "yup";

interface iTech {
	title: string;
	status: string;
}

type iTechKeys = keyof iTech;

export const newTechSchema = yup.object().shape({
	title: yup.string().required("Tecnologia obrigatória"),
	status: yup.string().required("Status obrigatório"),
} as Record<iTechKeys, any>);
