import styled from "styled-components";

const CustomInputStyled = styled.div`
  span {
    position: relative;
    display: inline-block;
    margin: 25px 10px 0px 10px;
  }

  .slide-up {
    display: inline-block;
    width: 215px;
    padding: 10px 0 15px 15px;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
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
      top: 3%;
      border-radius: 5px;

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
        border-radius: 5px;
      }
      &:after {
        transform: translateY(100%);
      }
    }
  }
`;

export default CustomInputStyled;
