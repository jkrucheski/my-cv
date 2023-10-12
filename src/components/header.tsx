import { FC } from "react";
import { Contact } from "./contact";
import { PersonalInfo } from "../types";

type Props = {
  data: PersonalInfo;
};

export const Header: FC<Props> = ({ data }) => {
  const { contact, name, title, location } = data;
  return (
    <div className="w-full p-8 flex justify-between items-center border border-cool-950 bg-cool-950">
      <div className="w-8/12">
        <h1 className="text-4xl pb-4 text-cool-50">{name}</h1>
        <h2 className="text-lg text-cool-50">{title}</h2>
        <h3 className="text-sm text-cool-100">{location}</h3>
      </div>
      <div className="w-5/12">
        <Contact contacts={contact} />
      </div>
    </div>
  );
};
