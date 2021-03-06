import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar--navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Daniel Ramirez</span>
        </h3>
        <button className="btn btn-secondary">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x pointer"></i>
        <p className="mt-3">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
