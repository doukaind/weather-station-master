import moment from "moment";

export const formatDay = (date: moment.MomentInput) => {
  const format = "ddd[.] D MMM";
  return moment(date).format(format);
};

export const nameDay = (date: moment.MomentInput, i: number) => {
  if (i !== 0) return formatDay(date);
  return "Tomorrow";
};
