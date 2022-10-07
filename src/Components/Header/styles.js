import styled from "styled-components";

export const Container = styled.div`
	width: var(--max-width);

	display: flex;
	justify-content: space-between;
`;

export const Header = styled.header`
	width: 100vw;
	height: 7.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom: 1px solid var(--color-grey-3);
`;
