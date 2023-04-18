import moment from "moment";

const formatDurationISO8601 = (durationString: string): number => {
  const duration = moment.duration(durationString);
  const durationInSeconds = duration.asSeconds();

  return durationInSeconds;
};

const getExpiredDate = () => {
  const expiredDate = new Date();
  expiredDate.setDate(expiredDate.getDate() + 2);

  return expiredDate;
};

export { formatDurationISO8601, getExpiredDate };
