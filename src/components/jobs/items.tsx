import { FC } from "react";

type Props = {
  title: string;
  description?: string;
  variant?: "bold" | "thin";
};

export const Items: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex gap-3 mt-1">
      <div className="flex pt-0.5 pb-0.5 justify-center">
        <div className="flex justify-center items-center w-4 h-4 rounded-full border-cool-50 bg-cool-700 border-4 transform translate-x-[55%]">
          <div className="bg-cool-50 w-1 h-1 rounded-full"></div>
        </div>
        <div className="bg-cool-300 border-l border-0.5 flex flex-col grow-4" />
      </div>

      <p className="text-sm text-cool-950 font-light">
        <span className="font-normal">{title}: </span>
        {description}
      </p>
    </div>
  );
};
