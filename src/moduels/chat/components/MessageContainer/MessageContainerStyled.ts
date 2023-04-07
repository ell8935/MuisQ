import styled from "styled-components";

const MessageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: clamp(200px, 75%, 300px);
  padding: ${({ theme }) => theme.padding.big};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.big};
`;

export default MessageContainerStyled;
