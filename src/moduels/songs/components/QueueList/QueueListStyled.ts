import styled from "styled-components";

const QueueListStyled = styled.div`
  position: relative;
  height: 100%;

  ul {
    padding-left: 0;

    li {
      list-style-type: none;
      display: flex;
      align-items: center;

      .durationTime {
        flex-shrink: 0;
        margin-left: 5px;
      }
      .songTitle {
        white-space: nowrap;
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .totalDuration {
    margin-top: 10px;
    text-align: right;
    font-size: 16px;
    position: absolute;
    bottom: 0;
  }
`;

export default QueueListStyled;
