import styled from "styled-components";

const MessageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: clamp(200px, 75%, 300px);
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export default MessageContainerStyled;
