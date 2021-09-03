import { FC, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import useCalendar, { Column } from "../Calendar/UseCalendar";
import { Container } from "./styles";

const Calendar: FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>();

  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const dateClickHandler = (date: string) => {
    return date;
  };

  return (
    <Container>
      <div className="div-title">
        <p className="selected-month">
          {`${
            monthNames[selectedDate.getMonth()]
          } ${" "} ${selectedDate.getFullYear()}`}
        </p>
        <div className="div-icon">
          <span className="span-icon" onClick={getPrevMonth}>
            <IoIosArrowBack />
          </span>
          <span className="span-icon" onClick={getNextMonth}>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols: Column[]) => {
            return (
              <tr key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`today ${col.classes}`}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      {col.value}
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`day ${col.classes}`}
                      onClick={() => {
                        setSelectedDay(col.date);
                        if (col.classes === "in-prev-month") {
                          getPrevMonth();
                        } else if (col.classes === "in-next-month") {
                          getNextMonth();
                        }
                      }}
                      style={{
                        background: col.date === selectedDay ? "#2c99ff" : "",
                        color: col.date === selectedDay ? "#fff" : "",
                      }}
                    >
                      {col.value}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Calendar;
