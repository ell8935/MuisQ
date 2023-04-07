import styled from "styled-components";

const SearchBarYTStyled = styled.div`
  padding: ${({ theme }) => theme.padding.big};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .suggestionsContainer {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.secondaryDarker};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .suggestion {
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export default SearchBarYTStyled;
