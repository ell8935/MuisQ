import styled from "styled-components";

const MusicControlStyled = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 0px;

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 3 / 2 / 6;
    justify-content: center;
    display: flex;
    gap: 10px;
  }
  .div3 {
    grid-area: 1 / 7 / 2 / 8;
  }

  @media (max-width: 850px) {
    .div1 {
      display: none;
    }
    .div3 {
      display: none;
    }
  }
`;

export default MusicControlStyled;
