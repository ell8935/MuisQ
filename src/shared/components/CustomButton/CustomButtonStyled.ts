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
    :hover {
      cursor: pointer;
    }
  }
`;

export default CustomButtonStyled;
