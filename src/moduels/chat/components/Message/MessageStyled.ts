import styled from "styled-components";

interface Props {
  isOwnMessage: boolean;
}

const MessageStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
  margin-bottom: 10px;

  .message {
    background: gray;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
  }

  .own-message {
    background: green;
    align-self: flex-end;
    text-align: right;
    padding: 10px;
  }

  .sender {
    margin: 1px;
  }
`;

export default MessageStyled;
