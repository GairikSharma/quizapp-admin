import React, { useContext, useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
// Importing axios
import axios from "axios";
import Alert from "../components/Alert";
import GlobalContext from "../GlobalContext";
import Loader from "../components/Loader";
import TagInput from "../components/TagInput";

function Home() {
  const { tags, code, setCode } = useContext(GlobalContext);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [explaination, setExplaination] = useState("");
  const [point, setPoint] = useState(0);
  const [level, setLevel] = useState("");
  const [Isloading, setIsLoading] = useState(false);

  //States for the alert
  const [isVisible, setIsVisible] = useState(false);
  //states for the invalid alert
  const [invalidIsVisible, setInvalidIsVisible] = useState(false);

  const [isCode, setIsCode] = useState(false);

  //States to check the input values

  let url = `https://quizapp-backend-sfcz.vercel.app/new-question/${category}`;

  const showAlert = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const showInvalidAlert = () => {
    setInvalidIsVisible(true);
    setTimeout(() => {
      setInvalidIsVisible(false);
    }, 1000);
  };

  const PostQuestions = async (e) => {
    e.preventDefault();
    if (
      question === "" ||
      category === "" ||
      correctOption === "" ||
      correctOption === "Select" ||
      point <= 0 ||
      tags.length === 0 ||
      explaination === "" || level === "Select"
    ) {
      alert("Please fill all the fields");
    } else {
      setIsLoading(true);
      try {
        await axios.post(url, {
          question: question,
          code: codeSnippet,
          options: tags,
          correctOption: correctOption,
          explaination: explaination,
          point: point,
          level: level,
        });
      } catch (error) {
        console.error("Error posting question:", error);
      } finally {
        setIsLoading(false);
        showAlert();
      }
    }
  };

  const handleLevelChange = (event) => {
    const selectedLevel = event.target.value;
    setLevel(selectedLevel); // Update the level state
    console.log(selectedLevel); // Log the selected level
  };

  const [alert, setAlert] = useState(false)

  return (
    <>
      <div className="form-wrapper w-full h-screen flex flex-row justify-center items-center">
        <div className="home-left-section w-full md:w-[80%] lg:w-[40%] h-screen p-10 overflow-y-scroll">
          {isVisible && (
            <div className="w-[350px] absolute top-7 right-7">
              <Alert />
            </div>
          )}
          {Isloading && (
            <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen bg-slate-200 flex justify-center items-center z-50">
              <Loader />
            </div>
          )}

          <div className="header text-4xl font-bold  text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome admin
          </div>
          <div className="title mb-4   text-gray-600 sm:truncate sm:text-lg sm:tracking-tight">
            Add questions for the users
          </div>

          <div className="form-content flex flex-col gap-5">
            <label className="block text-sm font-medium text-gray-900">
              Select the category :
            </label>
            <div className="flex flex-row flex-wrap mb-2 gap-3">
              <div className="checkbox-style flex justify-evenly items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("quantitative-aptitude");
                    setIsCode(false);
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">Quants</label>
              </div>

              <div className="checkbox-style flex justify-start items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("verbal");
                    setIsCode(false);
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">Verbal</label>
              </div>

              <div className="checkbox-style flex justify-start items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("dsa");
                    setIsCode(true);
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">DSA</label>
              </div>

              <div className="checkbox-style flex justify-start items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("oop");
                    setIsCode(true);
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">OOP</label>
              </div>

              <div className="checkbox-style flex justify-start items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("computer-networks");
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">CN</label>
              </div>

              <div className="checkbox-style flex justify-start items-center gap-1">
                <input
                  type="radio"
                  name="options"
                  id=""
                  onChange={(e) => {
                    setCategory("dbms");
                    setIsCode(false);
                    setCode(false);
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">DBMS</label>
              </div>
            </div>

            <div className="question">
              <label className="block text-sm font-medium text-gray-900">
                Question
              </label>
              <textarea
                rows="3"
                className="border border-gray-400 pl-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm"
                onChange={(e) => {
                  setQuestion(e.target.value);
                  setCode(false);
                }}
                placeholder="Write the question..."
              ></textarea>
            </div>

            {isCode ? (
              <div>
                <div className="code-component flex flex-col gap-2">
                  <span className="text-orange-300 text-md">
                    Do you want to add code snippet ?
                  </span>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="isCode">Yes</label>
                    <input
                      type="radio"
                      onChange={() => {
                        setCode(true);
                      }}
                      name="isCode"
                      id="isCode"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="isCode">No</label>
                    <input
                      type="radio"
                      onChange={() => {
                        setCode(false);
                      }}
                      name="isCode"
                      id="isCode"
                    />
                  </div>
                </div>

                {code ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-green-500">Enter the code</span>
                    <textarea
                      rows="3"
                      className="border border-gray-400 pl-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm"
                      onChange={(e) => {
                        setCodeSnippet(e.target.value);
                      }}
                      placeholder="Enter the code "
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}

            <div className="question">
              <label className="block text-sm font-medium text-gray-900">
                Entetr the options
              </label>
              <div className="tags-input-container">
                <TagInput />
              </div>
            </div>

            <div className="question">
              <label className="block text-sm font-medium text-gray-900">
                Correct Option
              </label>

              <select
                id="countries"
                className="bg-transparent appearance-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setCorrectOption(e.target.value);
                }}
              >
                <option>Select</option>
                {tags.map((i) => {
                  return (
                    <option
                      onChange={(e) => {
                        setCorrectOption(i);
                      }}
                    >
                      {i}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="question">
              <label className="block text-sm font-medium text-gray-900">
                Explaination
              </label>
              <textarea
                rows="3"
                className="border border-gray-400 pl-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm"
                onChange={(e) => {
                  setExplaination(e.target.value);
                }}
                placeholder="Write the question..."
              ></textarea>
            </div>

            <div className="question">
              <label
                for="number-input"
                className="block text-sm font-medium text-gray-900"
              >
                Point:
              </label>
              <input
                type="number"
                aria-describedby="helper-text-explanation"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter point for this question..."
                required
                onChange={(e) => {
                  if (e.target.value <= 0) {
                    setAlert(true)
                  } else {
                    setAlert(false)
                  }
                  setPoint(e.target.value);
                }}
              ></input>
              {alert ? <span className="text-sm text-red-500">* Point must greater than 0</span> : ""}
            </div>

            <div className="relative">
              <label
                for="number-input"
                className="block text-sm font-medium text-gray-900"
              >
                Level:
              </label>

              <select
                className="block w-[150px] pl-3 px-2 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-md appearance-none"
                onChange={handleLevelChange}
              >
                <option value="Select">Select</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
            </div>

            <button
              className="w-full mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
              onClick={PostQuestions}
            >
              Add Question
            </button>
          </div>
        </div>

        <div className="w-0 right-section xl:w-[70%] xl:h-screen bg-center overflow-y-hidden bg-[url('https://ideogram.ai/api/images/direct/I7BA0HyuSrWrdHJEcr_i8A.png')]"></div>
      </div>
    </>
  );
}

export default Home;
