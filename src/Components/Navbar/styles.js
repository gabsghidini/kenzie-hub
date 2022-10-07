import styled from "styled-components";

export const Nav = styled.nav`
	width: 100vw;
	height: 4.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom: 1px solid var(--color-grey-3);
`;

export const Container = styled.div`
	width: var(--max-width);

	display: flex;
	justify-content: space-between;
`;

export const Logout = styled.button`
	width: 5.5rem;
	height: 2rem;
	padding: 0 1rem;
	background-color: var(--color-grey-3);
	color: var(--color-grey-0);
	border: none;
	border-radius: 0.25rem;
`;
