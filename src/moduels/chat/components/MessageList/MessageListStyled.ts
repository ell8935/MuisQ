import styled from "styled-components";

const MessageListStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #363636;
    border-radius: 10px;
  }
  ul {
    list-style-type: none;
    padding-right: 10px;
    padding-left: 10px;
    margin: 0;
  }
`;

export default MessageListStyled;
