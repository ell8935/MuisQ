import styled from "styled-components";

const ExplanationBoxStyled = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.camel};
`;

export default ExplanationBoxStyled;
