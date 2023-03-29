import styled from "styled-components";

const RoomScreenStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  display: grid;
  height: calc(100vh - 30px);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10% 1fr 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  padding: 15px;
  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  .controlBox {
    grid-area: 1 / 2 / 2 / 6;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  .logout {
    grid-area: 1 / 6 / 2 / 7;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  .player {
    grid-area: 2 / 1 / 4 / 4;
  }
  .searchBar {
    grid-area: 2 / 4 / 3 / 7;
  }
  .chat {
    grid-area: 3 / 4 / 4 / 7;
  }
`;

export default RoomScreenStyled;
