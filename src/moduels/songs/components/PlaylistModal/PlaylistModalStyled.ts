import styled from "styled-components";

const PlaylistModalStyled = styled.div`
  width: 80%;
  list-style-type: none;

  .playlistName {
    width: 20%;
    cursor: pointer;
    align-items: center;
    display: flex;
  }

  .expanded {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .notExpanded {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .applyPlaylist {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default PlaylistModalStyled;
