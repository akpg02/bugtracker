import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="homepage">
      <div className="page-title-section">
        <div className="title">Bug Tracker App</div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Home;
