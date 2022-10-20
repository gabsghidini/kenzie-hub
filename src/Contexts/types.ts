/* Types */
export interface User {
	avatar_url: string;
	bio: string;
	contact: string;
	course_module: string;
	email: string;
	id: string;
	name: string;
	techs: Techs[];
	works: Works[];
}

export interface Techs {}

export interface Works {}

export interface LoginUser {
	email: string;
	password: string;
}

export interface RegisterUser {
	email: string;
	password: string;
	name: string;
	bio: string;
	contact: string;
	course_module: string;
}

export interface NewTech {
	title: string;
	status: string;
}

export interface UserProviderData {
	user: User;
	showErrorToast: (message: string) => void;
	showSuccessToast: (message: string) => void;
	handleRedirect: (redirectTo: string) => void;
	userLogin: (user: LoginUser) => void;
	userRegister: (user: RegisterUser) => void;
	addTech: (tech: NewTech) => void;
	deleteTech: (id: string) => void;
	updateTechs: () => void;
	isUpdating: boolean;
	loading: boolean;
}
