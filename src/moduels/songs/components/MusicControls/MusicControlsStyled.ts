import styled from "styled-components";

const MusicControlStyled = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 0px;

  .volume {
    grid-area: 1 / 1 / 2 / 2;
  }

  .baseControls {
    grid-area: 1 / 3 / 2 / 6;
    justify-content: center;
    display: flex;
    gap: 10px;
  }

  .fullScreen {
    grid-area: 1 / 7 / 2 / 8;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 850px) {
    .volume {
      display: none;
    }

    .fullScreen {
      display: none;
    }
  }
`;

export default MusicControlStyled;
