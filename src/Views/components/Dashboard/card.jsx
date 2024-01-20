import React from "react";
import PropTypes from "prop-types";
import Priority from "../../../Controllers/prorityController";

import "./card.css";

function Card({ count, priority, clicked }) {
  const { level, color } = Priority(priority);
  return (
    <button
      className="dashboard-card"
      onClick={clicked}
      style={{ color: color }}
    >
      <h2>Total: {level}</h2>
      <p>{count}</p>
    </button>
  );
}

Card.propTypes = {
  priority: PropTypes.string,
  count: PropTypes.number,
};

export default Card;
