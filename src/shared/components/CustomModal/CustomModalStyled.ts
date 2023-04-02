import styled from "styled-components";

interface CustomModalStyledProps {
  isOpen: boolean;
}

const CustomModalStyled = styled.div<CustomModalStyledProps>`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};

  .modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default CustomModalStyled;
