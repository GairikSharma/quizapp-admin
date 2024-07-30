import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useNavigate } from "react-router-dom";

function Questions() {
  const { topic } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home/dashboard");
  };
  return (
    <div className="flex flex-col gap-3 justify-start items-start mt-2 ml-2">
      <button onClick={handleGoBack}>Go back</button>
      Questions: {topic}
    </div>
  );
}

export default Questions;
