import styled from "styled-components";

const MainScreenStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10% 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  height: calc(100vh - 5rem);
  .header {
    grid-area: 1 / 1 / 2 / 7;
  }
  .imageBox {
    grid-area: 2 / 1 / 3 / 4;
  }
  .functionalBox {
    grid-area: 2 / 4 / 3 / 7;
    overflow-y: hidden;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 1fr;

    .header {
      grid-area: 1 / 1 / 2 / 5;
    }
    .imageBox {
      display: none;
    }

    .functionalBox {
      grid-area: 2 / 1 / 3 / 5;
    }
  }
`;

export default MainScreenStyled;
