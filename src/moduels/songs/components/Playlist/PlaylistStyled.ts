import styled from "styled-components";

const PlaylistStyled = styled.div`
  max-height: 100px;
  max-width: 100%;
  overflow: scroll;
  position: absolute;
  left: 0%;
  top: 90%;
  background-color: ${({ theme }) => theme.colors.primary};

  .data {
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }
`;

export default PlaylistStyled;
