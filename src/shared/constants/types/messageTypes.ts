import { UserInfo } from "firebase/auth";

export interface getMessagesInterface {
  roomId: string;
  callback: (messages: any) => void;
}

export interface sendMessageInterface {
  text: string;
  roomId: string;
  user: Partial<UserInfo>;
}
