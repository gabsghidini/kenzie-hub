import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 1rem;
`;

export const Title = styled.h2`
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: space-between;

	padding: 2.625rem 1.375rem;
	border-radius: 0.25rem;

	background-color: var(--grey-3);

	width: 18.75rem;

	gap: 0.625rem;
`;

export const Input = styled.input`
	margin: 0;
	padding: 0.5rem 1rem;

	border: none;
	border-radius: 0.25rem;

	background-color: var(--grey-2);
	color: var(--grey-0);

	:focus {
		outline: 1px solid var(--grey-0);
	}
`;

export const HeadlineBoldSmall = styled.p`
	cursor: pointer;
	color: var(--grey-1);
	font-weight: 600;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
`;

export const LoginButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0rem 1rem;

	height: 3rem;

	background-color: var(--color-primary);
	color: var(--grey-0);

	border: 1.2182px solid var(--color-primary);
	border-radius: 0.25rem;
	transition: 200ms;

	:hover {
		background-color: var(--color-primary-focus);
		cursor: pointer;
	}
`;

export const RegisterButton = styled(Link)`
	font-family: "Inter", sans-serif;
	font-size: 0.75rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0rem 1rem;

	height: 3rem;

	background-color: var(--grey-1);
	color: var(--grey-0);

	border: 1.2182px solid var(--grey-1);
	border-radius: 0.25rem;

	transition: 200ms;
	text-decoration: none;

	:hover {
		background-color: var(--grey-2);
		cursor: pointer;
	}
`;

export const StyledSelect = styled.select`
	margin: 0;
	padding: 0.5rem 1rem;

	border: none;
	border-radius: 0.25rem;

	background-color: var(--grey-2);
	color: var(--grey-0);

	:focus {
		outline: 1px solid var(--grey-0);
	}
`;
