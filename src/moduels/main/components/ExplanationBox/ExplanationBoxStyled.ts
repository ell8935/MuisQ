import styled from "styled-components";

const ExplanationBoxStyled = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.camel};
  height: 100%;
  font-weight: 600;
  text-align: center;
  line-height: 0.85;
  align-items: center;
`;

export default ExplanationBoxStyled;
