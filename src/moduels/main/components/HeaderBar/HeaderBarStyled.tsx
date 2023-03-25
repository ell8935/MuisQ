import styled from "styled-components";

const HeaderBarStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3px;
  justify-content: center;

  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.padding.small};
  }
  .middleBox {
    grid-area: 1 / 2 / 2 / 5;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.padding.small};
  }
  .logout {
    grid-area: 1 / 5 / 2 / 6;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.padding.small};
  }
`;

export default HeaderBarStyled;
