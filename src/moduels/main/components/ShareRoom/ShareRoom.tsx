import { useState } from "react";
import QRCode from "react-qr-code";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";
import ShareRoomStyled from "./ShareRoomStyled";

interface Props {
  roomId: string;
}

const ShareRoom = ({ roomId }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const url = Boolean(process.env.REACT_APP_IS_DEV)
    ? `http://localhost:3000/room?id=${roomId}`
    : `http://localhost:3000/room?id=${roomId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <ShareRoomStyled>
      <div className="copyUrlContainer">
        {isCopied ? <h5 className="isCopied">URL Copied!</h5> : " "}
        <CustomButton
          disabled={isCopied}
          className="copyUrl"
          onClick={copyToClipboard}
          label="Copy URL"
        />
      </div>
      <QRCode value={url} />
    </ShareRoomStyled>
  );
};

export default ShareRoom;
