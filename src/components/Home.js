import React, { useState } from "react";
import Header from "./Header";
import CalendarBar from "./CalendarBar";
import ProgressChart from "./ProgressChart";
import TaskCard from "./TaskCard";
import BottomNav from "./BottomNav";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="app-container">
      <Header />
      <CalendarBar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className="main-section">
        <ProgressChart selectedDate={selectedDate} />
        <TaskCard selectedDate={selectedDate} />
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
