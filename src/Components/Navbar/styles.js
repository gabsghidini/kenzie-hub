import styled from "styled-components";

export const Logout = styled.button`
	width: 5.5rem;
	height: 2rem;
	padding: 0 1rem;
	background-color: var(--grey-3);
	color: var(--grey-0);
	border: none;
	border-radius: 0.25rem;
`;

export const NavContainer = styled.div`
	width: 100%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid var(--grey-3);
`;

export const Nav = styled.nav`
	width: 80%;
	max-width: 1200px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;
