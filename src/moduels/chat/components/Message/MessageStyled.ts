import styled from "styled-components";

interface Props {
  isOwnMessage: boolean;
}

const MessageStyled = styled.div<Props>`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};

  .message {
    padding: 10px;
    background: gray;
    text-align: left;
    border-radius: 10px;
  }

  .own-message {
    padding: 10px;
    background: green;
    text-align: right;
    align-self: flex-end;
  }

  .sender {
    margin: 1px;
  }
`;

export default MessageStyled;
