import { FC } from "react";
import { Education as EducationType } from "../types";
import { ListItem, Text } from "./ui";

type Props = {
  education: EducationType;
};

export const Education: FC<Props> = ({ education }) => {
  return (
    <>
      <Text text="Educación" variant="h1" />
      <Text text={education.title} variant="h2" />
      <ListItem
        title={education.place}
        subtitle={`${education.location} ${education.startDate} - ${education.endDate}`}
      />
      <ListItem title="Otros" description={education.otros[0].name} />
    </>
  );
};
