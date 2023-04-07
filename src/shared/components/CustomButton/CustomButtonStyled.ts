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
    font-weight: 900;
    border-color: transparent;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme, disabled }) => (disabled ? theme.colors.warning : theme.colors.secondary)};

    :hover {
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.warningLighter : theme.colors.secondaryLighter};
    }

    :active {
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.warningDarker : theme.colors.secondaryDarker};
    }
  }
`;

export default CustomButtonStyled;
