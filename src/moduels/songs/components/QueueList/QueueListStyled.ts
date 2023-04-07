import styled, { keyframes } from "styled-components";
interface Props {
  currentIndex: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const QueueListStyled = styled.div<Props>`
  height: 100%;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primaryLighter};
  border-radius: 0 0 10px 10px;
  overflow: auto;

  ul {
    padding-left: 0;

    .highlighted {
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 10px;
      padding: 5px;
    }

    li {
      display: flex;
      align-items: center;
      list-style-type: none;
      padding: 15px 0px 15px 0px;
      line-height: 2rem;

      .highlighted {
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
        padding: 5px;
      }

      .queueListButton {
        opacity: 0;
        display: none;
        transition: opacity 0.4s ease-in-out;
      }

      :hover .queueListButton {
        opacity: 1;
        display: flex;
        animation: ${fadeIn} 0.3s ease-in-out;
        animation-fill-mode: forwards;
      }

      :not(:hover) .queueListButton {
        opacity: 0;
        animation: ${fadeOut} 0.3s ease-in-out;
        animation-fill-mode: forwards;
      }

      .durationTime {
        flex-shrink: 0;
        margin-left: 5px;
      }

      .songTitle {
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
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
