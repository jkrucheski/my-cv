import { FC } from "react";
import { Contact as ContactType } from "../types";

type Props = {
  contacts: ContactType[];
};

export const Contact: FC<Props> = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <a
          key={index}
          className="no-underline hover:underline"
          href={`https://${contact.url}`}
          target="blank"
        >
          <div className="cursor-pointer p-0.5 pb-1 text-xs leading-none text-cool-100 break-words flex flex-row items-center justify-end">
            <p className="text-base">{contact.name}</p>
            {contact.icon}
          </div>
        </a>
      ))}
    </>
  );
};
