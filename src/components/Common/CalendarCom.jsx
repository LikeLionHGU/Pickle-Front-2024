import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import moment from "moment";
import dayjs from "dayjs";

const StyledCalendar = styled(Calendar)`
  & {
    width: 328px;
    height: 286px;
    border: none;
  }
  .react-calendar {
  }

  .react-calendar__navigation {
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__month-view {
    padding: 15px 15px;
    font-size: 20px;
  }

  .react-calendar__month-view__weekdays {
    border-bottom: 2px solid #e8e8e8;

    abbr {
      font-size: 15px;
    }
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    font-size: 35px;
  }

  .react-calendar__month-view__days__day {
    font-weight: bolder;
  }

  .react-calendar__navigation {
    margin-top: 8px;
    margin-bottom: 0px;
    border-radius: 20px 20px 0 0;

    span {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .react-calendar__tile {
    text-align: center;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .react-calendar__tile:enabled:hover {
    background: #42a8f8;
    color: white;
    border-radius: 30px;
  }

  .react-calendar__tile--active {
    background: white;
    color: black;
  }

  .react-calendar__tile--now {
    background-color: white;
    color: black;
    border-radius: 30px;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__tile--hasActive {
    background: #42a8f8;
    color: white;
    border-radius: 30px;
  }
`;

function CalendarCom({ selected, onDateChange }) {
  const [dates, setDates] = useState(selected);

  const handleDateChange = (newDate) => {
    const selectedDateStr = moment(newDate).format("YYYY-MM-DD");

    setDates((prevDates) => {
      const isAlreadySelected = prevDates.includes(selectedDateStr);

      const updatedDates = isAlreadySelected
        ? prevDates.filter((date) => date !== selectedDateStr)
        : [...prevDates, selectedDateStr];

      onDateChange(updatedDates);
      return updatedDates;
    });
  };

  return (
    <StyledCalendar
      locale="ko"
      onChange={handleDateChange}
      value={dates.map((date) => new Date(date))}
      formatDay={(locale, date) => dayjs(date).format("DD")}
      tileClassName={({ date }) => {
        const dateStr = moment(date).format("YYYY-MM-DD");
        return dates.includes(dateStr);
        // ? "react-calendar__tile--highlighted"
        // : null;
      }}
    />
  );
}

export default CalendarCom;
