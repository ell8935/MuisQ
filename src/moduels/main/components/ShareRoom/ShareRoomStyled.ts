import styled from "styled-components";

const ShareRoomStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  .copyUrlContainer {
    position: relative;

    .isCopied {
      left: 15%;
      bottom: 100%;
      position: absolute;
    }

    .copyUrl {
      height: 3rem;
    }
  }
`;

export default ShareRoomStyled;
