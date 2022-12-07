import styled from "styled-components";

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 101px;

  @media (max-width: 1080px) {
    padding: 0 1rem;
  }
`

export const StyledNavigation = styled.nav`
  display: flex;
`;
