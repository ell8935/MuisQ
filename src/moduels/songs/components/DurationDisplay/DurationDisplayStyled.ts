import styled from "styled-components";

const DurationDisplayStyled = styled.div`
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 5px;
`;

export default DurationDisplayStyled;
