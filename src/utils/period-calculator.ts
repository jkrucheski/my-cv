import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export const periodCalculator = (sd: string, ed: string): string => {
  if (ed === "Actualidad") {
    return "";
  }

  const startDate = dayjs(sd, "MM YYYY");
  const endDate = ed !== "Actualidad" ? dayjs(ed, "MM YYYY") : dayjs();

  if (!startDate.isValid() || !endDate.isValid()) {
    throw new Error("Invalid date format");
  }

  const difference = dayjs.duration(endDate.diff(startDate));
  const years = difference.years();
  const months = difference.months();

  let result = "";

  if (years > 0) {
    result += years === 1 ? "1 año" : `${years} años`;
  }

  if (months > 0) {
    if (result) result += " y ";
    result += months === 1 ? "1 mes" : `${months} meses`;
  }

  return `(${result})`;
};
