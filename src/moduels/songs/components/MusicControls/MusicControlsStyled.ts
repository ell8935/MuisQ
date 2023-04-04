import styled from "styled-components";

const MusicControlStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;

  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1vw;

    img {
      max-width: 100%;
    }
  }

  .controlBox {
    display: flex;
    grid-area: 1 / 2 / 2 / 6;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    justify-content: center;
  }
  .logout {
    grid-area: 1 / 6 / 2 / 7;
    background-color: ${({ theme }) => theme.colors.camel};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

export default MusicControlStyled;
