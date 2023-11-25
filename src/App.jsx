import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LandinPage from "./pages/LandinPage";
import Home from "./pages/home";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ admin, setAdmin }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={admin ? <Home /> : <LandinPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
