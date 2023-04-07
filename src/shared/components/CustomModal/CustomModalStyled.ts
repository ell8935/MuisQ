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
    max-width: 100%;
    margin: 15% auto;
    width: fit-content;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.whiteCream};
    flex-direction: column;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .close {
      align-self: flex-end;
    }
  }
`;

export default CustomModalStyled;
