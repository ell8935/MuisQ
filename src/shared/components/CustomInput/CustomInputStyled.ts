import styled from "styled-components";

const CustomInputStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: "row";
  caret-color: gray;

  .default {
    border: 0;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    padding: 20px 0px;
    text-indent: 10px;
    color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.padding.medium};
    background-color: ${({ theme }) => theme.colors.whiteCream};
  }

  .inputButton {
    right: 0;
    width: 25%;
    height: 100%;
    position: absolute;
  }
`;

export default CustomInputStyled;
