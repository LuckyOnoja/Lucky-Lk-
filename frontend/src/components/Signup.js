import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Signup({
  userAuthFromSignup,
  loginValueFromSignup,
  userDataFromSignup,
}) {
  const [userAuth, setUserAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || []
  );
  const [loginMessage, setLoginMessage] = useState("");
  const [loginValue, setLoginValue] = useState(false);
  const [canceliconValue, setCanceliconValue] = useState(false);
  const [displayValue, setDisplayValue] = useState(true);
  const navigate = useNavigate();

  const windowName = "http://localhost:5000/";

  useEffect(() => {
    // Save data to local storage whenever the state changes
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${windowName}user/signup`, {
        email: email,
        password: password,
      });
      setLoginMessage("Signed up sucessfully ");
      setUserData(response.data.user);
      userDataFromSignup(userData);
      setUserAuth(true);
      userAuthFromSignup(userAuth);
      setTimeout(() => {
        navigate(`/message/${userData._id}`);
      }, 3000);
    } catch (error) {
      setLoginMessage("Error signing up", error);
    }
  };

  const loginValueChange = () => {
    setLoginValue(!loginValue);
    loginValueFromSignup(loginValue);
  };

  const displayChange = () => {
    setDisplayValue(false);
    if (displayValue === false) {
      document.getElementById("signupContainer").style.display = "none";
    }
  };

  return (
    <div className="signupContainer" id="signupContainer">
      {canceliconValue && (
        <i class="fa-solid fa-times" onClick={displayChange}></i>
      )}
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="........"
        ></input>
        <button onClick={handleSignup}>submit</button>
      </form>
      <h4 onClick={loginValueChange}>a user ? , Login</h4>
      <h2>{loginMessage}</h2>
    </div>
  );
}
