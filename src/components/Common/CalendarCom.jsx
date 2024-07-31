import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 328px;
    height: 286px;
    border: none !important;
    box-shadow: none !important;
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

  /* .react-calendar__month-view__days__day--neighboringMonth {
    color: #e8e8e8;
    font-weight: normal;
  } */

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
    /* border-radius: 30px; */
  }

  .react-calendar__tile--now {
    background-color: white;
    color: black;
    border-radius: 30px;
  }
`;

function CalendarCom({ selected, onDateChange }) {
  const [dates, setDates] = useState(selected);

  // 날짜 변경 핸들러
  const handleDateChange = (newDate) => {
    const selectedDateStr = newDate.toLocaleDateString();

    setDates((prevDates) => {
      const isAlreadySelected = prevDates.includes(selectedDateStr);

      const updatedDates = isAlreadySelected
        ? prevDates.filter((date) => date !== selectedDateStr)
        : [...prevDates, selectedDateStr];

      onDateChange(updatedDates); // 선택된 날짜를 상위 컴포넌트에 전달
      return updatedDates;
    });
  };

  return (
    <StyledCalendar
      locale="en"
      onChange={handleDateChange}
      value={dates.map((date) => new Date(date))}
      tileClassName={({ date }) => {
        const dateStr = date.toLocaleDateString();
        return dates.includes(dateStr)
          ? "react-calendar__tile--highlighted"
          : null;
      }}
    />
  );
}

export default CalendarCom;
