import React, { useContext, useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
// Importing axios
import axios from "axios";
import "../styles/adminPage.css";
import Alert from "../components/Alert";
import GlobalContext from "../GlobalContext";

function Home() {
  const { admin, setAdmin } = useContext(GlobalContext);
  const [question, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const [point, setPoint] = useState(null);
  const [tags, setTags] = useState([]);

  //States for the alert
  const [isVisible, setIsVisible] = useState(false);

  const showAlert = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleChange = (tags) => {
    setTags(tags);
  };

  const PostQuestions = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/new-question", {
        question: question,
        options: tags,
        point: point,
        correctOptionIndex: correctOption,
      });
      showAlert();
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <>
      {isVisible && <Alert />}
      <button
        onClick={() => {
          setAdmin(false);
        }}
        className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Logout
      </button>
      <div className="form-wrapper">
        <div className="header text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Welcome admin
        </div>
        <div className="title mb-4  leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Add questions for the users
        </div>
        <label
          for="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Question
        </label>
        <textarea
          id="about"
          name="about"
          rows="3"
          className="pl-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          placeholder="Write the question..."
        ></textarea>
        <label
          for="about"
          className="mt-2 mb-2 block text-sm font-medium leading-6 text-gray-900"
        >
          Entetr the options:
        </label>
        <div className="tags-input-container">
          <TagsInput
            value={tags}
            onChange={handleChange}
            inputProps={{
              placeholder: "Add Options",
              style: {
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                borderRadius: "3px",
              },
            }}
          />
        </div>

        <label
          for="number-input"
          className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Point:
        </label>
        <input
          type="number"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter point for this question..."
          required
          onChange={(e) => {
            setPoint(e.target.value);
          }}
        ></input>

        {/* new one  */}
        <label
          for="number-input"
          className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Correct Option:
        </label>
        <input
          type="number"
          aria-describedby="helper-text-explanation"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Correct Option..."
          required
          onChange={(e) => {
            setCorrectOption(e.target.value);
          }}
        ></input>

        <button
          className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          onClick={PostQuestions}
        >
          Add Question
        </button>
      </div>
    </>
  );
}

export default Home;
