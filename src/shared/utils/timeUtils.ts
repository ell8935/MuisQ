import moment from "moment";

function formatDurationISO8601(durationString: string): number {
  const duration = moment.duration(durationString);
  const durationInSeconds = duration.asSeconds();

  return durationInSeconds;
}

export { formatDurationISO8601 };
