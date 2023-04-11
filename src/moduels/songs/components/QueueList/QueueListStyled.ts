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
  margin-top: 1rem;
  height: 100%;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primaryLighter};
  border-radius: 0 0 10px 10px;
  overflow: auto;

  .queueListHeader {
    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      width: 15%;
      align-items: center;
      margin-left: 1.5rem;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  ul {
    padding-left: 0;

    .highlighted {
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 10px;
      padding: 3px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transform: translateY(-2px);
    }

    li {
      display: flex;
      align-items: center;
      list-style-type: none;
      line-height: 2rem;
      transition: all 0.2s ease-in-out; // Add transition here

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
          rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-2px);
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
    font-size: 16px;
  }
`;

export default QueueListStyled;
