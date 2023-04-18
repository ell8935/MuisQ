import styled from "styled-components";

const PlayerStyled = styled.div`
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.big};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .roomNameHeader {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: space-between;

    .modalSetters {
      display: flex;
    }

    h4 {
      margin: 0;
    }
  }

  .playerDetailsContainer {
    display: flex;

    .player {
      overflow: hidden;
      pointer-events: none;
    }

    @media (max-width: 850px) {
      .player {
        display: none;
      }
    }

    .songDetails {
      display: flex;
      overflow: hidden;
      margin-left: 1rem;
      white-space: nowrap;
      flex-direction: column;

      h3,
      h5 {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h3 {
        margin: 0;
      }
    }
  }
`;

export default PlayerStyled;
