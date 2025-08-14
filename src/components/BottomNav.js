import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaListUl, FaCalendarAlt, FaCog } from "react-icons/fa";

function BottomNav() {
  return (
    <nav className="bottom-right-nav">
      <ul>
        <li>
          <NavLink to="/home">
            <FaHome title="Home" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks">
            <FaListUl title="All Tasks" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar">
            <FaCalendarAlt title="Calendar" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <FaCog title="Settings" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
