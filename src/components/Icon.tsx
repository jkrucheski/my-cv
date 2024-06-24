import { FC } from "react";

export const Icon: FC = () => {
  return (
    // <div className="flex justify-center items-center w-4 h-4 rounded-full border-cool-50 bg-cool-700 border-4 ">
    //   <div className="bg-cool-50 w-1 h-1 rounded-full" />
    // </div>
    <svg
      className="w-3 h-3 text-cool-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};
