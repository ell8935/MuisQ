import styled from "styled-components";

interface Props {
  isOwnMessage: boolean;
}

const MessageStyled = styled.div<Props>`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
  font-weight: 600;

  .message {
    padding: 10px;
    background: ${({ theme }) => theme.colors.secondaryDarker};
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
    border-radius: 10px;
  }

  .own-message {
    padding: ${({ theme }) => theme.padding.medium};
    background: ${({ theme }) => theme.colors.secondaryLighter};
    color: ${({ theme }) => theme.colors.black};
    text-align: right;
    align-self: flex-end;
  }

  .sender {
    margin: 1px;
  }
`;

export default MessageStyled;
