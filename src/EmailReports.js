import React from "react";
import ReportCard from "./ReportCard";
import "./App.css";

const EmailReports = () => {
  const reportsData = [
    {
      id: 1,
      subject: "Report 1",
      sender: "sender1@example.com",
      date: "2023-10-30"
    },
    {
      id: 2,
      subject: "Report 2",
      sender: "sender2@example.com",
      date: "2023-10-29"
    },
    {
      id: 3,
      subject: "Report 3",
      sender: "sender3@example.com",
      date: "2023-10-30"
    },
    {
      id: 4,
      subject: "Report 4",
      sender: "sender4@example.com",
      date: "2023-10-29"
    }
    // Add more report data here
  ];

  return (
    <div>
      <h1>Email Reports</h1>
      <div className="report-list">
        {reportsData.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default EmailReports;
