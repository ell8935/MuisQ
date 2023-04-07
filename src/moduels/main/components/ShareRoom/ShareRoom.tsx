import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import ShareRoomStyled from "./ShareRoomStyled";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";

interface Props {
  roomId: string;
}

const ShareRoom = ({ roomId }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 3000);
  }, [isCopied]);

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
      <CustomButton
        disabled={isCopied}
        className="copyUrl"
        onClick={copyToClipboard}
        label={isCopied ? "URL Copied"! : "Copy URL"}
      />
      <QRCode value={url} />
    </ShareRoomStyled>
  );
};

export default ShareRoom;
