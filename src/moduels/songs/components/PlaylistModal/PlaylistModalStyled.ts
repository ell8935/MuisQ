import styled from "styled-components";

const PlaylistModalStyled = styled.div`
  width: 80%;
  list-style-type: none;

  .playlistName {
    width: 20%;
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .expanded {
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 100px;
    justify-content: space-between;
  }

  .notExpanded {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
  }

  .applyPlaylist {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default PlaylistModalStyled;
