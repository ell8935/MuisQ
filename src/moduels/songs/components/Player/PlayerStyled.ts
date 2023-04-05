import styled from "styled-components";

const PlayerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .roomNameHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .playerDetailsContainer {
    display: flex;

    @media (max-width: 850px) {
      .player {
        display: none;
      }
    }

    .songDetails {
      display: flex;
      padding-left: 1.5em;
      flex-direction: column;
    }
  }
`;

export default PlayerStyled;
