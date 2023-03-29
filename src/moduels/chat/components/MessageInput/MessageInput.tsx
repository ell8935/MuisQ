import { FormEvent, ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../shared/redux/store";
import { sendMessage } from "../../../../shared/services/firebaseServices/messageServices";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import MessageInputStyled from "./MessageInputStyled";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";

interface Props {
  roomId: string;
}

function MessageInput({ roomId }: Props) {
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
    <form onSubmit={handleSubmit}>
      <MessageInputStyled className="messageInputContainer">
        <CustomInput
          value={text}
          type="text"
          placeHolder="Enter a message"
          minLength={1}
          onChange={handleChange}
        />
        <div className="send-message">
          <CustomButton label="Send" disabled={text.length < 1} />
        </div>
      </MessageInputStyled>
    </form>
  );
}
export { MessageInput };
