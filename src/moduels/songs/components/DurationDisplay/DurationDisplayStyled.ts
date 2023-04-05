import styled from "styled-components";

const DurationDisplayStyled = styled.div`
  padding: 5px;
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export default DurationDisplayStyled;
