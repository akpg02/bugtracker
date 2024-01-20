import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import BugViewSection from "./component/bugViewSection";
import EditPanel from "../BugCreate & Edit/edit delete/editPanel";
import BugModel from "../../../Models/bugModel";
import { markComplete } from "../../../Controllers/Redux/bugSlice";
import EditBug from "../BugCreate & Edit/bugForm";

import "./bugview.css";

function BugView({ bug, clicked }) {
  const dispatch = useDispatch();
  const bugItem = new BugModel(bug);
  const [displayEdit, setDisplayEdit] = useState(false);

  const editClicked = () => {
    setDisplayEdit(!displayEdit);
  };

  const deleteClicked = () => {};
  return (
    <>
      {displayEdit ? (
        <EditBug title="Edit Bug" bug={bugItem} close={editClicked} />
      ) : (
        <div className="bug-view">
          <div className="close-btn">
            <EditPanel
              editClicked={editClicked}
              deleteClicked={deleteClicked}
            />
            <button className="bugview-close" onClick={clicked}>
              <span className="material-symbols-outlined ">close</span>
            </button>
          </div>
          <h2>{bugItem.name}</h2>
          <div className="bug-view-container">
            <BugViewSection title="Details" info={bugItem.details} />
            <BugViewSection title="Steps" info={bugItem.steps} />
            <BugViewSection title="Priority" info={bugItem.priority} />
            <BugViewSection title="Creator" info={bugItem.creator} />
            <BugViewSection title="App Version" info={bugItem.version} />
            <BugViewSection title="Time" info={bugItem.time} />
          </div>
          <button
            onClick={() => dispatch(markComplete())}
            className="complete-btn"
          >
            Mark Complete
          </button>
        </div>
      )}
    </>
  );
}

BugView.propTypes = {
  bug: PropTypes.object,
  clicked: PropTypes.func,
};

export default BugView;
