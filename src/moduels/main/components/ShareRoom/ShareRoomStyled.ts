import styled from "styled-components";

const ShareRoomStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .copyUrlContainer {
    position: relative;

    .isCopied {
      position: absolute;
      bottom: 100%;
      left: 15%;
    }

    .copyUrl {
      height: 3rem;
    }
  }
`;

export default ShareRoomStyled;
