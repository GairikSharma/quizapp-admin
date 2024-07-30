import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalContext from "./GlobalContext";
import RouterControl from "./RouterControl"; // Ensure this is correctly spelled
import Home from "./pages/Home";

function App() {
  const [admin, setAdmin] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [code, setCode] = useState(false);

  const [topic, setTopic] = useState("");

  return (
    <BrowserRouter>
      <GlobalContext.Provider
        value={{
          admin,
          setAdmin,
          tags,
          setTags,
          inputValue,
          setInputValue,
          code,
          setCode,
          topic,
          setTopic,
        }}
      >
        <div className="App">
          <RouterControl />
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
