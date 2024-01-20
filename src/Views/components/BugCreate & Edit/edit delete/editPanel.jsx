import React from "react";

import "./editPanel.css";

function EditPanel({ editClicked, deleteClicked }) {
  return (
    <div className="edit-panel">
      <button onClick={editClicked}>Edit</button>
      <button onClick={deleteClicked}>Delete</button>
    </div>
  );
}

export default EditPanel;
