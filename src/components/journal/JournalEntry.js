import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      
      <div
        className="journal__entry--picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://cdn.boldomatic.com/content/post/orNdTQ/Whatever?size=500)",
        }}
      ></div>

      <div className="journal__entry--body">
        <p className="journal__entry--body-title">Un nuevo día</p>
        <p className="journal__entry--body-content">Laborum nulla proident sint ad duis et non sit nostrud fugiat duis laboris in ullamco.</p>
      </div>

      <div className="journal__entry--date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  );
};
