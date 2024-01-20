import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../Controllers/Redux/bugSlice";
import BugCard from "../components/BugCard/bugCard";
import BugView from "../components/BugView/bugview";
import Modal from "../components/Modal/modal";

function ViewBugs() {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);

  const [displayBug, setDisplayBug] = useState({
    id: "",
    name: "",
    isDisplayed: false,
  });

  useEffect(() => {
    if (bugs.length < 1) {
      dispatch(getBugs());
    }
  }, [bugs, dispatch]);

  const handleClickedBug = (bug) => {
    setDisplayBug({
      isDisplayed: !displayBug.isDisplayed,
      id: bug._id,
      name: bug.name,
    });
  };
  return (
    <div className="page-container">
      {displayBug.isDisplayed && (
        <Modal>
          <BugView
            clicked={handleClickedBug}
            bug={bugs.filter((b) => b._id === displayBug.id)[0]}
          />
        </Modal>
      )}
      {bugs.map((bug) => (
        <BugCard
          bug={bug}
          key={bug._id}
          clickedBug={(e) => handleClickedBug(e)}
        />
      ))}
    </div>
  );
}

export default ViewBugs;
