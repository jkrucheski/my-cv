export type Position = {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  functions?: string;
};

export type Jobs = {
  company: string;
  position: Position[];
};
