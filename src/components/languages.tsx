import { FC } from "react";
import { Language as LanguageType } from "../types/language";
import { ListItem, Text } from "./ui";

type Props = {
  languages: LanguageType[];
};

export const Languages: FC<Props> = ({ languages }) => {
  return (
    <>
      <Text variant="h1" text="Idiomas" />
      {languages.map((lang, index) => (
        <ListItem
          key={index}
          title={lang.name}
          subtitle={lang.level}
          variant="thin"
        />
      ))}
    </>
  );
};
