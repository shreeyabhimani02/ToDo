import React from "react";

function ProgressChart({ selectedDate }) {
  // Temporary static data
  const totalTasks = 5;
  const completedTasks = 2;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-chart">
      <h3>Progress</h3>
      <p>{selectedDate.toDateString()}</p>
      <p>
        {completedTasks} of {totalTasks} tasks done
      </p>
      <div
        style={{
          background: "#dff9fb",
          borderRadius: "10px",
          overflow: "hidden",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "#0984e3",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressChart;
