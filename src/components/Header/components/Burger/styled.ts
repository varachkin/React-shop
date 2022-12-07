import styled from "styled-components";

export const BurgerStyled = styled.div`
  min-width: 33%;
  position: relative;
  z-index: 5;
  span {
    position: absolute;
    z-index: 9;
    top: -0.75rem;
    left: -0.5rem;
  }
  span:hover {
    cursor: pointer;
  }
  @media (min-width: 1080px) {
    display: none;
  }
`

export const BurgerMenuStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`