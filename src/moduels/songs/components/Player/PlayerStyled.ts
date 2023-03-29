import styled from "styled-components";

const PlayerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};

  .playerDetailsContainer {
    display: flex;

    .songDetails {
      padding-left: 1.5em;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default PlayerStyled;
