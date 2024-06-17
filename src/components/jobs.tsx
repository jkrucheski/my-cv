import { FC } from "react";
import { Jobs as JobsType } from "../types";
import { periodCalculator } from "../utils";
import { Text } from "./ui/text";
import { ListItem } from "./ui";

type Props = {
  experience: JobsType[];
};

export const Jobs: FC<Props> = ({ experience }) => {
  // const aux = () => {
  //   console.log(
  //     "--",
  //     experience[experience.length - 2].position[0].startDate,
  //     "06/2024"
  //   );
  //   const period = periodCalculator(
  //     experience[experience.length - 2].position[0].startDate,
  //     "06/2024"
  //   );
  //   console.log(period);
  //   return period;
  // };
  return (
    <>
      <Text text="Experiencia Laboral" variant="h1" />
      {experience.map((job) => (
        <div key={job.company} className="w-full flex flex-col">
          <Text text={job.company} variant="h2" />
          {job.position.map((position, index) => {
            const subtitle = `${position.startDate} - ${
              position.endDate
            } ${`${periodCalculator(position.startDate, position.endDate)}`}`;
            return (
              <ListItem
                key={index}
                title={position.title}
                subtitle={subtitle}
                description={position.functions}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
