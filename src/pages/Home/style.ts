import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;
