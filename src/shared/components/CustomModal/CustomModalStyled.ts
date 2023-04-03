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

  .modalContent {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    width: fit-content; /* Updated */
    max-width: 100%; /* Added */
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    justify-content: center;
    align-items: center;

    .close {
      align-self: flex-end;
    }
  }
`;

export default CustomModalStyled;
