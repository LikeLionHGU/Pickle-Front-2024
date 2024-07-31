import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 328px;
    height: 286px;
    border: none;
    box-shadow: none;
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

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #e8e8e8;
    font-weight: normal;
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
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #42a8f8;
    color: white;
    border-radius: 30px;
  }

  .react-calendar__tile--now {
    border: 2px solid #42a8f8;
    background-color: white;
    color: black;
    border-radius: 30px;
  }
`;

function CalendarCom({ onDateChange }) {
  const [dates, setDates] = useState([]);

  const handleDateChange = (newDate) => {
    const selectedDate = Array.isArray(newDate) ? newDate[0] : newDate;
    const selectedDateStr = selectedDate.toLocaleDateString();

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
      locale="en"
      onChange={handleDateChange}
      value={dates.length > 0 ? dates.map((date) => new Date(date)) : null}
      selectRange={false}
    />
  );
}

export default CalendarCom;
