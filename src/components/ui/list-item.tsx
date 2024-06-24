import { FC } from "react";
import { Icon } from "../Icon";
import { Text } from "./text";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: "bold" | "thin";
};

export const ListItem: FC<Props> = ({
  title,
  subtitle,
  description,
  variant = "bold",
}) => {
  return (
    <div className={variant === "bold" ? "my-1" : "mb-0.5"}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center align-text-top	">
          <Icon />
          {variant === "bold" ? (
            <Text text={title} variant="h3" />
          ) : (
            <Text text={title} variant="h4" />
          )}
        </div>
        {subtitle && <Text text={subtitle} variant="thin" />}
      </div>
      {description && (
        <div className="pl-4">
          <Text text={description} variant="p" />
        </div>
      )}
    </div>
  );
};
