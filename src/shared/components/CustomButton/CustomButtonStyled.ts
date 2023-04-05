import styled from "styled-components";
interface Props {
  disabled: boolean;
}
const CustomButtonStyled = styled.div<Props>`
  display: block;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100%;

  button {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.redGray : theme.colors.greenGray};
    color: black;
    border-color: transparent;
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.redGray};
      transform: scale(0.95);
    }

    :active {
      background-color: ${({ theme }) => theme.colors.camel};
      transform: scale(0.95);
    }
  }
`;

export default CustomButtonStyled;
