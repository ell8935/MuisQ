import styled from "styled-components";

const PlayerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};

  .roomNameHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .playerDetailsContainer {
    display: flex;

    @media (max-width: 850px) {
      .player {
        display: none;
      }
    }

    .songDetails {
      padding-left: 1.5em;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default PlayerStyled;
