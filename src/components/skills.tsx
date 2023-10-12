import { FC } from "react";
import { Text } from "./ui/text";
import { ListItem } from "./ui";

type Props = {
  data: string[];
};

export const Skills: FC<Props> = ({ data }) => {
  return (
    <>
      <Text text="Habilidades" variant="h1" />
      <div className="grid grid-cols-3">
        {data.map((skill, index) => (
          <ListItem key={index} title={skill} variant="thin" />
        ))}
      </div>
    </>
  );
};
