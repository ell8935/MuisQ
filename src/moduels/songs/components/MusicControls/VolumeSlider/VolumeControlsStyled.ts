import styled from "styled-components";

const VolumeControlsStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .verticalSlider {
    position: absolute;
    left: 60%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  .speakerIcon:hover + .verticalSlider,
  .verticalSlider:hover {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default VolumeControlsStyled;
