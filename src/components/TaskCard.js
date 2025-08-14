import { useState } from "react";
import { studentList } from "./Tasks.js";
import "./TaskCard.css";

export default function TaskCard() {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const handleCheck = (index) => {
    setCheckedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="task-list-container">
      {studentList.map((student, index) => (
        <label className="task-item" key={index}>
          <input
            type="checkbox"
            checked={checkedTasks.includes(index)}
            onChange={() => handleCheck(index)}
          />
          <span className="task-name">{student.name}</span>
        </label>
      ))}
    </div>
  );
}
