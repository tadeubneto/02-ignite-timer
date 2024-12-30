import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme["gray-100"]};
      border-top: 3px transparent solid;
      border-bottom: 3px transparent solid;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      &.active { //o proprio navlink do router cria a classe active
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;
