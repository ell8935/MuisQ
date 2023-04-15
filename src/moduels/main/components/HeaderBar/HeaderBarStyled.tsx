import styled from "styled-components";

const HeaderBarStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;

  .logo {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .controls {
    grid-area: 1 / 2 / 2 / 6;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  .logout {
    grid-area: 1 / 6 / 2 / 7;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

export default HeaderBarStyled;
