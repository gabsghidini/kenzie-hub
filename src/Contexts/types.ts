import { AxiosError } from "axios";

/* Types */
export interface User {
	avatar_url: string | null;
	bio: string | null;
	contact: string | null;
	course_module: string | null;
	created_at: string;
	email: string;
	id: string;
	name: string;
	techs: Tech[];
	updated_at: string;
	works: Work[];
}

export interface UserData {
	data: User;
}

export interface TechData {
	data: NewTech;
}
export interface UserProviderProps {
	children: React.ReactNode;
}

export interface Error {
	response: AxiosError;
}

export interface Tech {
	created_at?: string;
	id?: string;
	status: string;
	title: string;
	updated_at?: string;
}

export interface Work {}

export interface LoginUser {
	email: string;
	password: string;
}

export interface UserResponse {
	user: {
		avatar_url: string | null;
		bio: string | null;
		contact: string | null;
		course_module: string | null;
		created_at: string;
		email: string;
		id: string;
		name: string;
		techs: Tech[];
		updated_at: string;
		works: Work[];
	};
	token: string;
}

export interface RegisterResponse {
	user: {
		avatar_url: string | null;
		bio: string | null;
		contact: string | null;
		course_module: string | null;
		created_at: string;
		email: string;
		id: string;
		name: string;
		techs: Tech[];
		updated_at: string;
		works: Work[];
	};
}

export interface LoginUserResponse {
	data: UserResponse;
}

export interface RegisterUserResponse {
	data: RegisterResponse;
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

export interface NewTechResponse {
	data: {
		created_at: string;
		id: string;
		status: string;
		title: string;
		updated_at: string;
		user: {
			id: string;
		};
	};
}

export interface DeleteTechResponse {
	data: string | null;
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
