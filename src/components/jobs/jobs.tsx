import { FC } from "react";
import { Jobs as JobsType } from "../../types";
import { periodCalculator } from "../../utils";
import { Text } from "../ui/text";
import { Items } from "./items";
import { Position } from "../../types/jobs";

type Props = {
  experience: JobsType[];
};

export const Jobs: FC<Props> = ({ experience }) => {
  const aux = (positions: Position[]) => {
    const totalPeriod: string[] = [];

    positions.forEach((position) => {
      const period = periodCalculator(
        position.startDate,
        position.endDate || "06/2024"
      );
      totalPeriod.push(period);
    });
    console.log(totalPeriod);
    if (totalPeriod.length === 1) {
      if (positions[0].endDate === "Actualidad") {
        return `(${positions[0].startDate} - ${positions[0].endDate})`;
      }
      return `(${positions[0].startDate} - ${positions[0].endDate}, ${totalPeriod[0]})`;
    }
    return `(${positions[0].startDate} - ${positions[0].endDate}, ${totalPeriod
      .reverse()
      .join(" y ")})`;
  };

  return (
    <>
      <Text text="Experiencia Laboral" variant="h1" />
      {experience.map((job) => (
        <div key={job.company} className="w-full flex flex-col mb-1 mt-2">
          <div className="flex items-center gap-4 w-full justify-between">
            <Text text={job.company} variant="h2" />
            <Text text={aux(job.position)} variant="thin" />
          </div>

          {job.position.map((position, index) => {
            return (
              <Items
                key={index}
                title={position.title}
                description={position.functions}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
