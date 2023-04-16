import styled from "styled-components";

const PlaylistStyled = styled.div`
  left: 0%;
  top: 90%;
  max-width: 100%;
  overflow: scroll;
  max-height: 100px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};

  .data {
    display: flex;
    overflow-x: hidden;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default PlaylistStyled;
