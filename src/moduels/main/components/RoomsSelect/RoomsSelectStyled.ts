import styled from "styled-components";

const RoomsSelectStyled = styled.div`
  padding-right: 25px;
  padding-left: 25px;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .explanation {
    text-align: center;
    font-size: clamp(2rem, 2.5vw, 4rem);
  }

  .roomSelectCreateContainer {
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      text-align: center;
    }

    .listContainer {
      height: 50%;
      font-weight: 700;
      overflow: hidden auto;
      padding: 0;

      .linkRoom {
        user-select: none;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};

        .listItem {
          margin: 0 1rem 0 1rem;
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
          list-style-type: none;
          padding: ${({ theme }) => theme.padding.small};
          border-radius: ${({ theme }) => theme.borderRadius.medium};
          background-color: ${({ theme }) => theme.colors.secondaryDarker};
          text-indent: 10px;
          span {
            display: flex;
            color: rgba(0, 0, 0, 0.54);
          }

          :hover {
            background-color: ${({ theme }) => theme.colors.secondaryLighter};
          }
        }
      }
    }
  }
`;

export default RoomsSelectStyled;
