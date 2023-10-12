import { ReactNode } from "react";

export type Contact = {
  icon: ReactNode;
  name: string;
  url: string;
};

export type PersonalInfo = {
  contact: Contact[];
  name: string;
  title: string;
  location: string;
};
