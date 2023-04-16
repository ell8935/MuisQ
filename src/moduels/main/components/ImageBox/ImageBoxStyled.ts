import styled from "styled-components";

const ImageBoxStyled = styled.div`
  width: 100%;
  height: 100%;

  #container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  #image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transform: scale(1.5) translate(0, 0);
  }
`;
export default ImageBoxStyled;
