import styled from "styled-components";

const CustomInputStyled = styled.div`
  width: 100%;

  span {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .slide-up {
    display: inline-block;
    width: 100%;
    font-weight: 400;
    padding: 15px 0px;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: ${({ theme }) => theme.padding.small};
    outline: 0;
    text-indent: 80px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      transform: translateX(0);
      top: 2%;
      right: 50%;
      border-radius: ${({ theme }) => theme.padding.small};

      left: 1%;
      padding: 10px 15px;
      transition: all 0.3s ease-in-out;
      overflow: hidden;

      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }
      &:before {
        // Skinny bit here
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 5px;
        background: #134a46; // change this to #134A46
      }
      &:after {
        top: 0;
        bottom: 0;
        background: #377d6a;
      }
    }
  }
  span:nth-child(1) .slide-up {
    text-indent: 105px;
  }
  span:nth-child(3) .slide-up {
    text-indent: 125px;
  }
  span:nth-child(1) .slide-up:focus,
  span:nth-child(1) .slide-up:active,
  span:nth-child(3) .slide-up:focus,
  span:nth-child(3) .slide-up:active {
    text-indent: 0;
  }
  .slide-up:focus,
  .slide-up:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: translateY(-100%);

      &:before {
        border-radius: ${({ theme }) => theme.padding.small};
      }
      &:after {
        transform: translateY(100%);
      }
    }
  }
`;

export default CustomInputStyled;
