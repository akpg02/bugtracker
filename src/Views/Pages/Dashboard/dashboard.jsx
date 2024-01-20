import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Dashboard/card";
import { getBugs } from "../../../Controllers/Redux/bugSlice";

import "./dashboard.css";

function Dashboard() {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
  const navigate = useNavigate();

  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs === undefined, dispatch]);

  const filterBugs = (priority) => {
    return bugs.filter((bug) => bug.priority === priority);
  };

  const redirect = () => {
    return navigate("/bugs");
  };

  if (bugs) {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
  }

  return (
    <div className="page-container">
      <Card priority="1" count={highCount.length} clicked={redirect} />
      <Card priority="2" count={midCount.length} clicked={redirect} />
      <Card priority="3" count={lowCount.length} clicked={redirect} />
    </div>
  );
}

export default Dashboard;
