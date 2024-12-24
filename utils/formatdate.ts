import { format } from "date-fns";

export const formatDate = (date: string | null | undefined) => {
  if (!date) {
    return "";
  }

  try {
    return format(new Date(date), "dd.MM.yyyy");
  } catch (error) {
    console.error("Invalid date format:", error);
    return "";
  }
};
