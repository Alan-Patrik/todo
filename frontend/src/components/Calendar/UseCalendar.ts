import { useState } from "react";

export interface Column {
  classes: string;
  date: string;
  value: number;
}

interface CalendarRows {
  [id: number]: Column[];
}

const daysShortArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthNamesArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useCalendar = (daysShort = daysShortArr, monthNames = monthNamesArr) => {
  function fixDigit(val: number) {
    return val.toString().length === 1 ? "0" + val : val;
  }

  const today = new Date();
  const todayFormatted = `${fixDigit(today.getDate())}-${fixDigit(
    today.getMonth() + 1
  )}-${today.getFullYear()}`;
  const daysInWeek = [0, 1, 2, 3, 4, 5, 6];
  const [selectedDate, setSelectedDate] = useState(today);

  const selectedMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  const prevMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const rows = 5;
  const cols = 7;
  const calendarRows: CalendarRows = {};

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "in-prev-month",
              date: `${fixDigit(prevMonthStartingPoint)}-${
                fixDigit(selectedDate.getMonth()) === 0
                  ? 12
                  : fixDigit(selectedDate.getMonth())
              }-${
                fixDigit(selectedDate.getMonth()) === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()
              }`,
              value: prevMonthStartingPoint,
            },
          ];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${fixDigit(currentMonthCounter)}-${fixDigit(
                selectedDate.getMonth() + 1
              )}-${selectedDate.getFullYear()}`,
              value: currentMonthCounter,
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "",
            date: `${fixDigit(currentMonthCounter)}-${fixDigit(
              selectedDate.getMonth() + 1
            )}-${selectedDate.getFullYear()}`,
            value: currentMonthCounter,
          },
        ];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "in-next-month",
            date: `${fixDigit(nextMonthCounter)}-${
              fixDigit(selectedDate.getMonth() + 2) === 13
                ? 1
                : fixDigit(selectedDate.getMonth() + 2)
            }-${
              fixDigit(selectedDate.getMonth() + 2) === 13
                ? selectedDate.getFullYear() + 1
                : selectedDate.getFullYear()
            }`,
            value: nextMonthCounter,
          },
        ];
        nextMonthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  };

  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    );
  };

  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  };
};

export default useCalendar;
