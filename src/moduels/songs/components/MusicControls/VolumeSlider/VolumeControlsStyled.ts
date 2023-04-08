import styled from "styled-components";

const VolumeControlsStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  &:hover {
    .slider {
      opacity: 1;
      pointer-events: auto;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    position: absolute;
    left: 60%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 25%;
    background: #fff;
    box-shadow: 0 0 5px #3498db;
    margin-top: -3.5px;
  }
`;

export default VolumeControlsStyled;
