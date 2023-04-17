import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import ShareRoomModalStyled from "./ShareRoomModalStyled";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";

interface Props {
  roomId: string;
}

const ShareRoomModal = ({ roomId }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 3000);
  }, [isCopied]);

  const url = `https://musiq.onrender.com/room?id=${roomId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <ShareRoomModalStyled>
      <CustomButton
        disabled={isCopied}
        className="copyUrl"
        onClick={copyToClipboard}
        label={isCopied ? "URL Copied"! : "Copy URL"}
      />
      <QRCode value={url} />
    </ShareRoomModalStyled>
  );
};

export default ShareRoomModal;
