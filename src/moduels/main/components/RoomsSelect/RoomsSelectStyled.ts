import styled from "styled-components";

const RoomsSelectStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .listContainer {
    width: 95%;
    margin: 0px;
    font-weight: 700;
    padding: ${({ theme }) => theme.padding.big};

    .linkRoom {
      user-select: none;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};

      .listItem {
        margin-bottom: 5px;
        list-style-type: none;
        padding: ${({ theme }) => theme.padding.small};
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        background-color: ${({ theme }) => theme.colors.secondaryDarker};
        text-indent: 10px;

        :hover {
          background-color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

export default RoomsSelectStyled;
