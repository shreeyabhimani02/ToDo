import React from "react";
import BottomNav from "./BottomNav";

function Settings() {
  return (
    <div className="app-container">
      <h1 style={{ color: "white" }}>Settings</h1>
      <p style={{ color: "white" }}>Adjust your preferences here.</p>
      <BottomNav />
    </div>
  );
}

export default Settings;
