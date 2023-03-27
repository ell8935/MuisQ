import styled from "styled-components";

const RoomsSelectStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .listContainer {
    width: 98%;
    padding: ${({ theme }) => theme.padding.medium};
    margin: 0px;
    font-weight: 700;
    .linkRoom {
      color: ${({ theme }) => theme.colors.black};
      user-select: none;
      text-decoration: none;

      .listItem {
        list-style-type: none;
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        background-color: ${({ theme }) => theme.colors.redGray};
        padding: ${({ theme }) => theme.padding.small};
        margin-bottom: 5px;
        :hover {
          background-color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

export default RoomsSelectStyled;
