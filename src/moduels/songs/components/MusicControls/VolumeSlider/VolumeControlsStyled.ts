import styled from "styled-components";

const VolumeControlsStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;

  .verticalSlider {
    position: absolute;
    opacity: 0;
    left: 60%;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }

  .speakerIcon:hover + .verticalSlider,
  .verticalSlider:hover {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default VolumeControlsStyled;
