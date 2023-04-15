import styled from "styled-components";

interface CustomModalStyledProps {
  isOpen: boolean;
}

const CustomModalStyled = styled.div<CustomModalStyledProps>`
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ isOpen }) => (isOpen ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)")};

  .modalContent {
    display: flex;
    padding: 20px;
    width: clamp(25vw, 75%, 80vw);
    margin: 15% auto;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryLighter};
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .close {
      align-self: flex-end;
    }
  }
`;

export default CustomModalStyled;
