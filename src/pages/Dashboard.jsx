import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="screen w-full min-h-screen">
        <div className="sidebar w-[20%] min-h-screen bg-blue-200 flex gap-4 flex-col justify-start items-start p-5">
          <Link to="/add-question">Post Question</Link>
          <Link to="/home/dashboard">Dashboardn</Link>
        </div>
        <div className="topics"></div>
      </div>
    </>
  );
}

export default Dashboard;
