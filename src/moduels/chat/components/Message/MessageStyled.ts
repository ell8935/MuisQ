import styled from "styled-components";

interface Props {
  isOwnMessage: boolean;
}

const MessageStyled = styled.div<Props>`
  display: flex;
  font-weight: 600;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};

  .message {
    padding: 10px;
    text-align: left;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.secondaryDarker};
  }

  .own-message {
    text-align: right;
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => theme.padding.medium};
    background: ${({ theme }) => theme.colors.secondaryLighter};
  }

  .sender {
    margin: 1px;
  }

  h6 {
    margin: 0;
    text-align: right;
    color: ${({ theme }) => theme.colors.primaryLighter};
  }
`;

export default MessageStyled;
