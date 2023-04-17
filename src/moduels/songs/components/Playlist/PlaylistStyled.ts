import styled from "styled-components";

const PlaylistStyled = styled.div`
  left: 0%;
  top: 100%;
  max-width: 100%;
  overflow: scroll;
  max-height: 120px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};

  .data {
    display: flex;
    align-items: center;
  }

  .songTitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default PlaylistStyled;
