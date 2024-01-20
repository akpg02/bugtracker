import React from "react";
import "./bugViewSection.css";

function BugViewSection({ title, info }) {
  return (
    <div className="view-section">
      <h2 className="title">{title}</h2>
      <p className="info">{info}</p>
    </div>
  );
}

export default BugViewSection;
