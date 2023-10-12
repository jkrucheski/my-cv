import { FC } from "react";

type Props = {
  text: string;
  variant: string;
};

export const Text: FC<Props> = ({ text, variant }) => {
  if (variant === "h1")
    return (
      <h1 className="pb-1 mb-2 text-cool-950 text-xl font-medium leading-none uppercase border-b border-cool-100">
        {text}
      </h1>
    );
  if (variant === "h2")
    return <h2 className="text-cool-700 text-lg break-words ">{text}</h2>;
  if (variant === "h3")
    return <h3 className=" text-cool-950 text-base text-justify">{text}</h3>;
  if (variant === "h4")
    return (
      <h3 className=" text-cool-950 text-base text-justify font-light">
        {text}
      </h3>
    );
  if (variant === "p")
    return (
      <p className="text-sm text-cool-950 text-justify font-light">{text}</p>
    );
  if (variant === "thin")
    return (
      <p className="pt-[3.5px] text-cool-950 text-xs font-thin text-right">
        {text}
      </p>
    );
};
