import React, { useState } from "react";
import BugModel from "../../../Models/bugModel";

import "./bugForm.css";

function BugForm({ title, bug, close }) {
  const [bugObject, setBugObject] = useState(new BugModel(bug));

  const inputChanged = (e) => {
    setBugObject({ ...bugObject, [e.target.name]: e.target.value });
  };
  return (
    <div className="bugForm-container">
      <div className="bug-create">
        <div className="close-btn edit-close">
          {title === "Edit Bug" && (
            <span onClick={close} className=" material-symbols-outlined">
              close
            </span>
          )}
        </div>
        <h1>{title}</h1>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Bug Name"
            required
            onChange={inputChanged}
            value={bugObject.name}
          />
          <label htmlFor="details">Details: </label>
          <textarea
            name="details"
            id=""
            required
            placeholder="Detailed description of the bug"
            cols="30"
            rows="5"
            onChange={inputChanged}
            value={bugObject.details}
          ></textarea>
          <label htmlFor="steps">Steps: </label>
          <textarea
            name="steps"
            id=""
            required
            placeholder="Steps to recreate the bug"
            cols="30"
            rows="5"
            onChange={inputChanged}
            value={bugObject.steps}
          ></textarea>
          <label htmlFor="prioirty">Priority:</label>
          <select
            name="priority"
            required
            onChange={inputChanged}
            value={bugObject.priority}
          >
            <option value="1">High</option>
            <option value="2">Mid</option>
            <option value="3">Low</option>
          </select>
          <label htmlFor="assigned">Assigned</label>
          <select
            name="assigned"
            onChange={inputChanged}
            value={bugObject.assigned}
          >
            <option value="Grace Akpan">Grace Akpan</option>
          </select>
          <label htmlFor="version">Application Version:</label>
          <input
            type="text"
            name="version"
            placeholder="Application Version"
            onChange={inputChanged}
            value={bugObject.version}
          />
          <button type="submit">{title}</button>
        </form>
      </div>
    </div>
  );
}

export default BugForm;
