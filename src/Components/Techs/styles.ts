import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

export const Input = styled.input`
	width: 85%;
	height: 1rem;

	background-color: var(--grey-2);
	color: var(--grey-0);

	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem;

	&:focus {
		outline: 1px solid var(--grey-0);
	}
`;

export const Select = styled.select`
	width: 90%;
	height: 2rem;

	background-color: var(--grey-2);
	color: var(--grey-0);

	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem;
`;

export const Option = styled.option`
	width: 85%;
	height: 1rem;

	background-color: var(--grey-2);
	color: var(--grey-0);

	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem;

	&:focus {
		outline: 1px solid var(--grey-0);
	}
`;

export const TechsContainer = styled.form`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	width: 300px;
	height: 40%;
	min-height: 300px;

	background-color: var(--grey-3);
	color: var(--grey-0);
	border-radius: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`;

export const Main = styled.main`
	padding: 0;
	margin: 1rem 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	max-width: 75rem;
	height: 100%;
	gap: 1rem;
`;

export const Tech = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	height: 2rem;
	gap: 1rem;

	padding: 1rem;
	margin: 0;

	font-weight: bold;

	background-color: var(--grey-4);
	border-radius: 0.25rem;

	transition: 200ms;

	&:hover {
		background-color: var(--grey-2);
		cursor: pointer;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}
`;

export const TechHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	gap: 1rem;
`;

export const TechButton = styled.button`
	width: 1.5rem;
	height: 1.5rem;

	background-color: var(--grey-3);
	color: var(--grey-0);
	font-weight: bold;

	border: none;
	border-radius: 0.25rem;

	cursor: pointer;
`;

export const TechList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;

	gap: 1rem;
	padding: 1.5rem 0;

	background-color: var(--grey-3);
	border-radius: 0.25rem;
`;

export const Button = styled.button`
	width: 90%;
	height: 2rem;

	background-color: var(--color-primary);
	color: var(--grey-0);
	font-weight: bold;

	border: none;
	border-radius: 0.25rem;

	&:hover {
		background-color: var(--color-primary-focus);
		cursor: pointer;
	}
`;

export const Label = styled.label`
	width: 90%;
	line-height: 1rem;
	text-align: left;
`;

export const TrashIcon = styled(BsFillTrashFill)`
	&:hover {
		color: red;
	}
`;
