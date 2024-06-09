import dayjs from "dayjs";
import "dayjs/locale/es"; // Importar el idioma español

export function formatDateString(date: string): string {
  // Establecer el idioma local de Day.js a español
  dayjs.locale("es");

  // Create a Day.js instance with the provided date
  const dayjsDate = dayjs(date);

  // Get the name of the day of the week
  const dayOfWeek: string = dayjsDate.format("dddd");

  // Get the day of the month
  const dayOfMonth: string = dayjsDate.format("D");

  // Get the name of the month
  const month: string = dayjsDate.format("MMMM");

  // Get the year
  const year: string = dayjsDate.format("YYYY");

  // Concatenate the elements to form the formatted date
  const formattedDate: string = `${dayOfWeek} ${dayOfMonth} de ${month} ${year}`;

  return formattedDate;
}
