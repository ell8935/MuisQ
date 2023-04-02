import moment from "moment";

interface Props {
  durationInSeconds: number;
}

function DurationDisplay({ durationInSeconds }: Props) {
  const formattedDuration = moment
    .utc(durationInSeconds * 1000)
    .format("mm:ss");

  return <span>{formattedDuration}</span>;
}

export default DurationDisplay;
