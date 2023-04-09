import styled from "styled-components";

const CustomInputStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: "row";

  .default {
    border: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 1rem;
    padding: 20px 0px;
    text-indent: 10px;
    background-color: ${({ theme }) => theme.colors.whiteCream};
    border-radius: ${({ theme }) => theme.padding.medium};
  }

  .inputButton {
    right: 0;
    width: 25%;
    height: 100%;
    position: absolute;
  }
`;

export default CustomInputStyled;
