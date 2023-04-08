import TimeSentStyled from "./TimeSentStyled";

interface Props {
  durationInSeconds: number;
  durationInNanoSeconds: number;
}

const TimeSent = ({ durationInSeconds, durationInNanoSeconds }: Props) => {
  const date = new Date(durationInSeconds * 1000 + durationInNanoSeconds / 1000000);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timestampString = `${hours}:${minutes}`;

  return (
    <TimeSentStyled>
      <h6>{timestampString}</h6>
    </TimeSentStyled>
  );
};

export default TimeSent;
