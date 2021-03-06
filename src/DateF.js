import React from "react";
import "./DateF.css";

export default function DateF() {
  let myCurrentDate = new Date();
  let date = myCurrentDate.getDate();

  let year = myCurrentDate.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[myCurrentDate.getDay()];
  let months = [
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
  let monthName = months[myCurrentDate.getMonth()];
  return (
    <div className="dateFormatted">
      <span className="text-lowercase">{day}</span>, {date} {monthName} {year}
    </div>
  );
}
