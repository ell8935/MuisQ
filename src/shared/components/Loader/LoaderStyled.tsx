import styled from "styled-components";

const LoaderStyled = styled.div`
  width: 20%;
  padding: 1em;
  height: 100px;
  margin: 0 0 2em;
  text-align: center;
  margin: 0 auto 1em;
  vertical-align: top;
  display: inline-block;

  /*
  Set the color of the icon
*/
  svg path,
  svg rect {
    fill: #0b0602;
  }
`;

export default LoaderStyled;
