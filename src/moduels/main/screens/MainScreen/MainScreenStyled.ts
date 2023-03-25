import styled from "styled-components";

const MainScreenStyled = styled.div`
  @media (min-width: 600px) {
    padding: 50px;
  }
  background-color: ${({ theme }) => theme.colors.whiteCream};
  padding: 10px;
  display: flex;
  gap: 3px;
  flex-direction: column;
`;

export default MainScreenStyled;
