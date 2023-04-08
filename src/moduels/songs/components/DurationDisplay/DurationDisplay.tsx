import moment, { Duration } from "moment";
import DurationDisplayStyled from "./DurationDisplayStyled";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

interface Props {
  durationInSeconds: number;
  isTotal?: boolean;
}

const DurationDisplay = ({ durationInSeconds, isTotal }: Props) => {
  const duration: Duration = moment.duration(durationInSeconds * 1000);
  const format = duration.asHours() >= 1 ? "HH:mm:ss" : "mm:ss";
  const formattedDuration = moment.utc(duration.asMilliseconds()).format(format);

  return (
    <DurationDisplayStyled>
      {isTotal && <HourglassTopIcon color="action" />}
      <span>{formattedDuration}</span>
    </DurationDisplayStyled>
  );
};

export default DurationDisplay;
