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
    left: 60%;
    opacity: 0;
    width: 100%;
    height: 15px;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    transition: opacity 0.5s ease-in-out;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.secondary};
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 25%;
    margin-top: -3.5px;
    -webkit-appearance: none;
    box-shadow: 0 0 5px #3498db;
  }
`;

export default VolumeControlsStyled;
