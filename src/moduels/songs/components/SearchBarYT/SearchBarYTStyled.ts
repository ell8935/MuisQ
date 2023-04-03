import styled from "styled-components";

const SearchBarYTStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};

  .search {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .suggestionsContainer {
    background-color: ${({ theme }) => theme.colors.greenGray};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 100%;
  }
`;

export default SearchBarYTStyled;
