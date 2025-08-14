import React from "react";

function CalendarBar({ selectedDate, setSelectedDate }) {
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday start

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + i);
    return date;
  });

  return (
    <div className="calendar-bar">
      {weekDays.map((date) => {
        const isSelected = date.toDateString() === selectedDate.toDateString();
        return (
          <div
            key={date.toDateString()}
            className={`day-wrapper ${isSelected ? "selected" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            <span className="day-name">
              {date.toLocaleDateString("en-US", { weekday: "short" })}
            </span>
            <span className="day">{date.getDate()}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarBar;
