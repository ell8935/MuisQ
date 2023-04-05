import { useSelector } from "react-redux";
import MessageInputStyled from "./MessageInputStyled";
import { FormEvent, ChangeEvent, useState } from "react";
import { RootState } from "../../../../shared/redux/store";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import { sendMessage } from "../../../../shared/services/firebaseServices/messageServices";

interface Props {
  roomId: string;
}

const MessageInput = ({ roomId }: Props) => {
  const user = useSelector((state: RootState) => state.auth);
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    sendMessage({ roomId, user, text });
    setText("");
  };

  return (
    <MessageInputStyled>
      <form onSubmit={handleSubmit}>
        <CustomInput
          value={text}
          type="text"
          placeHolder="Enter a message"
          minLength={1}
          onChange={handleChange}
          buttonLabel="Send"
        />
      </form>
    </MessageInputStyled>
  );
};

export default MessageInput;
