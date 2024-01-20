import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";

import "./sidebar.css";

function Sidebar() {
  const [showArrow, setShowArrow] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      {/* <div
        className={`arrow ${showArrow ? "show" : ""}`}
        onClick={() => setShowArrow(!showArrow)}
      >
        {!showArrow && (
          <span className="material-symbols-outlined chevron">
            chevron_right
          </span>
        )}
      </div> */}
      <div className={`left-panel ${showArrow ? "show" : ""}`}>
        {/* <div
          className={`arrow ${showArrow ? "show" : ""}`}
          onClick={() => setShowArrow(!showArrow)}
        >
          {showArrow && (
            <span className="material-symbols-outlined chevron">
              chevron_left
            </span>
          )}
        </div> */}
        <Link className="nav-link" to="/">
          <h1 className="brand">Bug Tracker</h1>
        </Link>
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/bugs" className="nav-link">
              View Bugs
            </Link>
          </li>
          {auth.admin && (
            <li>
              <Link to="/create" className="nav-link">
                Create Bug
              </Link>
            </li>
          )}
        </ul>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </>
  );
}

export default Sidebar;
