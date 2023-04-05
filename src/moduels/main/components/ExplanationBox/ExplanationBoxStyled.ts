import styled from "styled-components";

const ExplanationBoxStyled = styled.div`
  height: 100%;
  display: flex;
  font-weight: 600;
  line-height: 0.85;
  text-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export default ExplanationBoxStyled;
