import React, { FormEvent, ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { RootState } from "../../../../shared/redux/store";
import { sendMessage } from "../../../../shared/services/firebase";

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
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        type="text"
        placeholder="Enter a message"
        value={text}
        onChange={handleChange}
        className="message-input"
        required
        minLength={1}
      />
      <button type="submit" disabled={text.length < 1} className="send-message">
        Send
      </button>
    </form>
  );
}
export { MessageInput };
