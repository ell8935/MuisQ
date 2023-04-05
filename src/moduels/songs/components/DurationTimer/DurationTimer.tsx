import moment from "moment";

interface Props {
  totalDurationInSeconds: number;
  durationElapsedInSeconds: number;
}

const DurationTimer = ({
  durationElapsedInSeconds,
  totalDurationInSeconds,
}: Props) => {
  const formattedTotalDuration = moment
    .utc(totalDurationInSeconds * 1000)
    .format("mm:ss");
  const formattedElapsedDuration = moment
    .utc(durationElapsedInSeconds * 1000)
    .format("mm:ss");

  return (
    <span>
      {formattedElapsedDuration}/{formattedTotalDuration}
    </span>
  );
};

export default DurationTimer;
