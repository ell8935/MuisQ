import styled from "styled-components";

const SearchBarYTStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.camel};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};

  .suggestionsContainer {
    background-color: ${({ theme }) => theme.colors.greenGray};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-top: 10px;
  }
`;

export default SearchBarYTStyled;
