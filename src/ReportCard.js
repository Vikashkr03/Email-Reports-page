import React from "react";
import "./App.css";

const ReportCard = ({ report }) => {
  return (
    <div className="report-card">
      <h2>{report.subject}</h2>
      <p>Sender: {report.sender}</p>
      <p>Date: {report.date}</p>
      {/* Add more report details and actions here */}
    </div>
  );
};

export default ReportCard;
