import styled from "styled-components";

const CustomInputStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  position: relative;
  margin-right: 10px;
  flex-direction: "row";

  .default {
    border: 0;
    width: 100%;
    color: #377d6a;
    font-weight: 400;
    padding: 20px 0px;
    text-indent: 10px;
    background: #efefef;
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
