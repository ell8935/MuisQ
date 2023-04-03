import styled from "styled-components";

const CustomInputStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: "row";
  position: relative;

  .default {
    width: 100%;
    font-weight: 400;
    padding: 20px 0px;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: ${({ theme }) => theme.padding.medium};
    text-indent: 10px;
  }

  .inputButton {
    position: absolute;
    right: 0;
    height: 100%;
    width: 25%;
  }
`;

export default CustomInputStyled;
