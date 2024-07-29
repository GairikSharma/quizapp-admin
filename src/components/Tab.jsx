import React from "react";
import { Link } from "react-router-dom";

function Tab() {
  return (
    <>
      <div className="tab w-full h-[44px] flex gap-5 justify-center items-center">
        <Link to="/home/dashboard">Dashboard</Link>
        <Link to="/">Add Question</Link>
      </div>
    </>
  );
}

export default Tab;
