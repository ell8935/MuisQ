import moment from "moment";

interface Props {
  totalDurationInSeconds: number;
  durationElapsedInSeconds: number;
}

function DurationTimer({
  durationElapsedInSeconds,
  totalDurationInSeconds,
}: Props) {
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
}

export default DurationTimer;
// import { useEffect, useState } from "react";
// import moment from "moment";

// interface Props {
//   durationInSeconds: number;
//   start: boolean;
// }

// function DurationTimer({ durationInSeconds, start }: Props) {
//   const [formattedDuration, setFormattedDuration] = useState(
//     `00:00/${durationInSeconds}`
//   );

//   useEffect(() => {
//     let intervalId: NodeJS.Timer;
//     if (start) {
//       const startMoment = moment.utc();
//       intervalId = setInterval(() => {
//         const currentMoment = moment.utc();
//         const elapsedDuration = moment.duration(
//           currentMoment.diff(startMoment)
//         );
//         const formattedElapsedDuration = moment
//           .utc(elapsedDuration.asMilliseconds())
//           .format("mm:ss");
//         const formattedTotalDuration = moment
//           .utc(durationInSeconds * 1000)
//           .format("mm:ss");
//         setFormattedDuration(
//           `${formattedElapsedDuration}/${formattedTotalDuration}`
//         );
//       }, 1000);
//     } else {
//       setFormattedDuration(
//         `00:00/${moment.utc(durationInSeconds * 1000).format("mm:ss")}`
//       );
//     }

//     return () => clearInterval(intervalId);
//   }, [durationInSeconds, start]);

//   return <span>{formattedDuration}</span>;
// }

// export default DurationTimer;
