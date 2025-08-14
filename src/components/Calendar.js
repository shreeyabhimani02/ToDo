// FullCalendarPage.jsx
import React, { useState } from "react";
import { FaHome, FaList, FaCalendarAlt, FaCog } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function FullCalendarPage() {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-08-15" },
    { title: "Project Deadline", date: "2025-08-20" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom right, #6a88a8, #3b2b3b)",
        padding: "20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div>
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
        >
          Full Calendar
        </h1>
        <p>Click on a date to add an event</p>
      </div>

      {/* Full Calendar */}
      <div
        style={{ background: "white", borderRadius: "10px", padding: "10px" }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          height="auto"
        />
      </div>

      {/* Floating Menu */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "50px",
          padding: "8px",
        }}
      ></div>
    </div>
  );
}

const iconButtonStyle = {
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "50%",
  padding: "10px",
  fontSize: "18px",
  cursor: "pointer",
};
