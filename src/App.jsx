import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

function App() {
  const [admin, setAdmin] = useState(false);

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <GlobalContext.Provider
        value={{ admin, setAdmin, tags, setTags, inputValue, setInputValue }}
      >
        <BrowserRouter>
          <div className="App">
            <Home />
          </div>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
