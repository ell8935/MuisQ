import styled from "styled-components";

const CustomButtonStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  button {
    width: 5em;
    height: 3em;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.greenGray};
    color: black;
    border-color: transparent;
  }
`;

export default CustomButtonStyled;
