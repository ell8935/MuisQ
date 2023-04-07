import styled from "styled-components";

const VolumeControlsStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover {
    .verticalSlider {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .verticalSlider {
    position: absolute;
    left: 60%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }
`;

export default VolumeControlsStyled;
