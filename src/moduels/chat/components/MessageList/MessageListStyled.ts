import styled from "styled-components";

const MessageListStyled = styled.div`
  height: 100%;
  display: flex;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column-reverse;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border-radius: 10px;
    background-color: #363636;
  }
  ul {
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
`;

export default MessageListStyled;
