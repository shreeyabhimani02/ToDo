import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaListUl, FaCalendarAlt, FaEllipsisH } from "react-icons/fa";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <nav className="bottom-right-nav">
        <ul>
          <li>
            <Link to="/">
              <FaHome title="Home" />
            </Link>
          </li>
          <li>
            <Link to="/task">
              <FaListUl title="Tasks" />
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <FaCalendarAlt title="Calendar" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaEllipsisH title="More" />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
