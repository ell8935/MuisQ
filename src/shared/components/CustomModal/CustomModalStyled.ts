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
    margin: 15% auto;
    align-items: center;
    flex-direction: column;
    width: clamp(25vw, 30%, 80vw);
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.primaryLighter};

    .close {
      align-self: flex-end;
    }
  }

  @media (max-width: 850px) {
    .modalContent {
      width: 85%;
    }
  }
`;

export default CustomModalStyled;
