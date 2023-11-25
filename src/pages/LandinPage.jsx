import React, { useContext, useState } from "react";
import "../styles/LandingPage.css";
import { FiGithub } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";

function LandinPage() {
  const { admin, setAdmin } = useContext(GlobalContext);
  const adminemail = "admin@gmail.com";
  const adminpassword = "admin2002";
  const [email, setEmail] = useState("");
  const [password, setPasswrd] = useState("");
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordInput = (e) => {
    setPasswrd(e.target.value);
    console.log(password);
  };

  const navigate = useNavigate();
  const navigateToAddQuestion = () => {
    if (email === adminemail && password === adminpassword) {
      navigate("/");
      setAdmin(true)
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="left">
          <button className="auth-button github">
            <FiGithub />
            GitHub
          </button>
          <button className="auth-button google">
            <FaGooglePlusG />
            Google
          </button>
          <button className="auth-button facebook">
            <FaFacebookF />
            acebook
          </button>
        </div>
        <div className="center">
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="login-signup-form">
            <h3>Login Here</h3>
            <input
              className="auth-form"
              type="email"
              placeholder="Enter email here..."
              onChange={handleEmailInput}
            />
            <input
              className="auth-form"
              type="password"
              placeholder="Enter password here..."
              onChange={handlePasswordInput}
            />
            <button className="auth-button" onClick={navigateToAddQuestion}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandinPage;
