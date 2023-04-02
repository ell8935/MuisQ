import QRCode from "react-qr-code";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";

interface Props {
  roomId: string;
}

const ShareRoom = ({ roomId }: Props) => {
  const url = Boolean(process.env.REACT_APP_IS_DEV)
    ? `http://localhost:3000/room?id=${roomId}`
    : `http://localhost:3000/room?id=${roomId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("Copied to clipboard:", url);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <CustomButton onClick={copyToClipboard} label="Copy URL to share room" />
      <CustomButton label="Show QR" />
      <QRCode value={url} />
    </div>
  );
};

export default ShareRoom;
