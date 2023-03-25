import styled from "styled-components";

const RoomsSelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .listContainer {
    width: clamp(100px, 75%, 500px);
    padding: ${({ theme }) => theme.padding.medium};
    margin: 0px;

    .listItem {
      list-style-type: none;
      border: 2px solid black;
      background-color: ${({ theme }) => theme.colors.white};
      padding: ${({ theme }) => theme.padding.small};

      .linkRoom {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export default RoomsSelectStyled;
