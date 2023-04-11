import styled from "styled-components";

const SearchBarYTStyled = styled.div`
  padding: ${({ theme }) => theme.padding.big};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .suggestionsContainer {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.primaryLighter};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .suggestion {
      align-items: center;
      display: flex;
      transition: all 0.2s ease-in-out; // Add transition here

      h4 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
          rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-2px);
      }
    }
  }
`;

export default SearchBarYTStyled;
