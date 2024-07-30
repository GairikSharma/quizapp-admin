import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Error from "./pages/Error";
import GlobalContext from "./GlobalContext";

function RouterControl() {
  const { topic } = useContext(GlobalContext);
  console.log(topic);
  return (
    <Routes>
      <Route path="/home/dashboard" element={<Dashboard />}></Route>
      <Route path="/" element={<Home />} />
      <Route path={`/questions/${topic}`} element={<Questions />} />
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default RouterControl;
