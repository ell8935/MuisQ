import styled from "styled-components";

interface Props {
  color: string | undefined;
}

const CustomIconButtonStyled = styled.div<Props>`
  .iconButton {
    color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.secondary)};
  }
`;

export default CustomIconButtonStyled;
