import styled from "styled-components";
import { CustomTextInterface } from "../../constants/types";

const CustomTextStyled = styled.div<CustomTextInterface>`
  padding: 0.5em;
  text-align: "center";
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ size }) => `${size}px` || "22px"};
`;

export default CustomTextStyled;
