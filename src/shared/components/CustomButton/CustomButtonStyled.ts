import styled from "styled-components";
interface Props {
  disabled: boolean;
}
const CustomButtonStyled = styled.div<Props>`
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
  align-items: center;

  button {
    width: 100%;
    height: 100%;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    border-color: transparent;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme, disabled }) => (disabled ? theme.colors.redGray : theme.colors.greenGray)};

    :hover {
      transform: scale(0.95);
      background-color: ${({ theme }) => theme.colors.redGray};
    }

    :active {
      transform: scale(0.95);
      background-color: ${({ theme }) => theme.colors.camel};
    }
  }
`;

export default CustomButtonStyled;
