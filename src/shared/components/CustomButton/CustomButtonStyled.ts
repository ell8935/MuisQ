import styled from "styled-components";

const CustomButtonStyled = styled.div`
  display: block;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100%;

  button {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.greenGray};
    color: black;
    border-color: transparent;
    :hover {
      cursor: pointer;
    }
  }
`;

export default CustomButtonStyled;
