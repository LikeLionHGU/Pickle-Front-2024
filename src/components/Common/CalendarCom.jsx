import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarCom() {
  const [value, onChange] = useState(new Date());
  const handleDateChange = (event, value) => {
    console.log(value);
  };

  return (
    <>
      <Calendar onChange={handleDateChange} value={value} />
    </>
  );
}
