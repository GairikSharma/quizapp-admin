import React, { useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
// Importing axios
import axios from "axios";

function Home() {
  const [question, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const [tags, setTags] = useState([]);

  const handleChange = (tags) => {
    setTags(tags);
  };

  const PostQuestions = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/new-question", {
        question: question,
        options: tags,
        correctOptionIndex: correctOption,
      });
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Question..."
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <TagsInput
        value={tags}
        onChange={handleChange}
        placeholder="Add Options"
      />
      <input
        type="number"
        placeholder="Enter Correct Option..."
        onChange={(e) => {
          setCorrectOption(e.target.value);
        }}
      />
      <button onClick={PostQuestions}>Add Question</button>
    </>
  );
}

export default Home;
