import React, { useContext, useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
// Importing axios
import axios from "axios";
import Alert from "../components/Alert";
import InvalidAlert from "../components/InvalidAlert";
import GlobalContext from "../GlobalContext";

function Home() {
  const { admin, setAdmin } = useContext(GlobalContext);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [point, setPoint] = useState(0);
  const [tags, setTags] = useState([]);

  //States for the alert
  const [isVisible, setIsVisible] = useState(false);
  //states for the invalid alert
  const [invalidIsVisible, setInvalidIsVisible] = useState(false);

  //States to check the input values

  let url = `https://quizapp-backend-95eh.onrender.com/new-question/${category}`;

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

  const handleChange = (tags) => {
    setTags(tags);
  };

  const PostQuestions = async (e) => {
    e.preventDefault();
    if (
      question === "" ||
      category === "" ||
      correctOption === "" ||
      point <= 0 ||
      tags.length === 0
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        await axios.post(url, {
          question: question,
          options: tags,
          correctOption: correctOption,
          point: point,
        });
      } catch (error) {
        console.error("Error posting question:", error);
      } finally {
        showAlert();
      }
    }
  };

  const tagStyle = {
    backgroundColor: "lightblue",
    color: "black",
    padding: "5px",
    borderRadius: "3px",
    margin: "2px",
    cursor: "pointer",
  };

  const containerStyle = {
    borderRadius: "5px",
    backgroundColor: "black",
  };

  return (
    <>
      <div className="form-wrapper w-full h-screen flex flex-row justify-center items-center p-0">
        <div className="home-left-section relative w-full md:w-[80%] lg:w-[40%] h-screen p-7 overflow-y-scroll">
          {isVisible && (
            <div className="w-[350px] absolute top-7 right-7">
              <Alert />
            </div>
          )}

          {/* {invalidIsVisible && (
            <div className="absolute top-1 right-0 w-[350px]">
              <InvalidAlert />
            </div>
          )} */}
          <div className="header text-4xl font-bold  text-gray-500 sm:truncate sm:text-3xl sm:tracking-tight">
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
                  }}
                  className="w-[25%]"
                />
                <label htmlFor="">DBMS</label>
              </div>
            </div>

            <div className="question">
              <label
                for="about"
                className="block text-sm font-medium text-gray-900"
              >
                Question
              </label>
              <textarea
                id="about"
                name="about"
                rows="3"
                className="border border-gray-400 pl-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                placeholder="Write the question..."
              ></textarea>
            </div>

            <div className="question">
              <label
                for="about"
                className="block text-sm font-medium text-gray-900"
              >
                Entetr the options
              </label>
              <div
                className="tags-input-container"
                style={{
                  border: "2px solid gray",
                  padding: "7px",
                  borderRadius: "7px",
                  backgroundColor: "transparent",
                }}
              >
                <TagsInput
                  value={tags}
                  onChange={handleChange}
                  tagProps={{ style: tagStyle }}
                />
              </div>
            </div>

            <div className="question">
              <label
                for="number-input"
                className="block text-sm font-medium text-gray-900"
              >
                Correct Option
              </label>

              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setCorrectOption(e.target.value);
                }}
              >
                {correctOption === "" && <option>Select</option>}
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
                  setPoint(e.target.value);
                }}
              ></input>
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
