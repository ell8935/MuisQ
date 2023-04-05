import styled from "styled-components";

const SearchBarYTStyled = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .search {
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
  }

  .suggestionsContainer {
    background-color: ${({ theme }) => theme.colors.greenGray};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .suggestion {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export default SearchBarYTStyled;
