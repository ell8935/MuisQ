import styled from "styled-components";

const MessageContainerStyled = styled.div`
  min-height: clamp(200px, 75%, 300px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};
`;

export default MessageContainerStyled;
