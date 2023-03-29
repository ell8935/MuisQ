import styled from "styled-components";

const MainScreenStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  display: grid;
  height: calc(100vh - 30px);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10% 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  padding: 15px;

  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  .middleBox {
    grid-area: 1 / 2 / 2 / 6;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  .logout {
    grid-area: 1 / 6 / 2 / 7;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  .explanationBox {
    grid-area: 2 / 1 / 3 / 4;
  }
  .functionalBox {
    grid-area: 2 / 4 / 3 / 7;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 1fr 1fr;

    .logo {
      grid-area: 1 / 1 / 2 / 2;
    }

    .middleBox {
      grid-area: 1 / 2 / 2 / 4;
    }

    .logout {
      grid-area: 1 / 4 / 2 / 5;
    }

    .explanationBox {
      grid-area: 2 / 1 / 3 / 5;
    }

    .functionalBox {
      grid-area: 3 / 1 / 4 / 5;
    }
  }
`;

export default MainScreenStyled;

//PC
/* @media (min-width: 600px) {
  padding: 50px;
}
//mobile
background-color: ${({ theme }) => theme.colors.whiteCream};
padding: 10px;
gap: 3px; */
