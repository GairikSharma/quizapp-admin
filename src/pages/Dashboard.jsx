import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaBrain,
  FaCommentDots,
  FaNetworkWired,
  FaCodeBranch,
  FaCubes,
  FaDatabase,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Dashboard() {
  const { topic, setTopic } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [shrink, setShrink] = useState(false);
  const routingData = [
    {
      id: 1,
      name: "DSA",
      currTopic: "dsa",
      bg: "#d0d0d0", // Darker Light Gray
      description: "Master the foundations of efficient coding!",
      icon: FaCodeBranch,
    },
    {
      id: 2,
      name: "OOP",
      currTopic: "oop",
      bg: "#cce0f0", // Darker Pale Blue
      description: "Understand the core principles of structured coding!",
      icon: FaCubes,
    },
    {
      id: 3,
      name: "Computer Network",
      currTopic: "computer-networks",
      bg: "#e6d8b9", // Darker Soft Beige
      description: "Dive into the world of interconnected systems!",
      icon: FaNetworkWired,
    },
    {
      id: 4,
      name: "DBMS",
      currTopic: "dbms",
      bg: "#b2d0cb", // Darker Mint Green
      description: "Unlock the secrets of data organization and retrieval!",
      icon: FaDatabase,
    },
    {
      id: 5,
      name: "Aptitude",
      currTopic: "quantitative-aptitude",
      bg: "#e0c1e0", // Darker Lavender
      description: "Sharpen your mind with challenging puzzles!",
      icon: FaBrain,
    },
    {
      id: 6,
      name: "Verbal",
      currTopic: "verbal",
      bg: "#ffd2d2", // Darker Peach
      description: "Enhance your language and comprehension skills!",
      icon: FaCommentDots,
    },
  ];
  return (
    <>
      <div className="screen w-full flex flex-row justify-between">
        <div
          className={
            shrink
              ? "relative rounded-lg m-5 hidden md:flex sidebar md:w-[25%] lg:w-[5%] min-h-screen bg-blue-200 lg:flex gap-4 flex-col justify-start items-start p-5"
              : "relative rounded-lg m-5 hidden md:flex sidebar md:w-[25%] lg:w-[15%] min-h-screen bg-blue-200 lg:flex gap-4 flex-col justify-start items-start p-5"
          }
        >
          <div className="absolute top-3 right-3">
            <IoIosArrowForward />
          </div>
          <Link to="/">Post Question</Link>
          <Link to="/home/dashboard">Dashboardn</Link>
        </div>

        <div className="w-full md:w-[75%] lg:w-[85%] h-[70%] topics grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center justify-items-center">
          {routingData.map((i) => (
            <div
              key={i.id}
              style={{ backgroundColor: i.bg }}
              className="w-[90%] h-[200px] transition-transform transform lg:hover:translate-y-[-5px] border border-gray-300 shadow-lg rounded-lg flex gap-1 flex-col justify-center items-center"
            >
              <div className="text-center text-3xl">{<i.icon />}</div>
              <span className="text-md font-semibold">{i.name}</span>
              <p className="text-center px-3 text-sm">{i.description}</p>
              <button
                className="w-[100px] h-auto text-center flex gap-2 items-center ml-4 underline"
                onClick={() => {
                  setTopic(i.currTopic);
                  navigate(`/questions/${i.currTopic}`);
                }}
              >
                Explore <FaArrowRightLong />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
