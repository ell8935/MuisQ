import styled from "styled-components";

const MessageListStyled = styled.div`
  height: 100%;
  display: flex;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column-reverse;

  ul {
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
`;

export default MessageListStyled;
