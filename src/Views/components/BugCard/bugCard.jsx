import React from "react";
import PropTypes from "prop-types";
import Priority from "../../../Controllers/prorityController";

import "./bugCard.css";

function BugCard({ bug, clickedBug }) {
  const { name, priority, version } = bug;
  const { level, color } = Priority(priority);

  const onClickedHandler = (e) => {
    clickedBug(e);
  };

  return (
    <button
      onClick={() => onClickedHandler(bug)}
      className="bug-card"
      style={{ color: color }}
    >
      <div className="name">{name}</div>
      <div className="priority">{level}</div>
      <div className="version">{version}</div>
    </button>
  );
}

BugCard.propTypes = {
  bug: PropTypes.object,
  clickedBug: PropTypes.func,
};

export default BugCard;
