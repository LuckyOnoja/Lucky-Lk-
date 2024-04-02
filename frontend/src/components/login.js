import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Login({
  userAuthFromLogin,
  loginValueFromSignup,
  userDataFromLogin,
  adminAuthFromLogin,
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (
        (email === process.env.REACT_APP_ADMIN_EMAIL) &
        (password === process.env.REACT_APP_ADMIN_CODE)
      ) {
        setAdminAuth(true);
        adminAuthFromLogin(true);
      }
      const response = await axios.post(`${windowName}user/login`, {
        email,
        password,
      });
      setLoginMessage("Logged in sucessfully ");
      setUserData(response.data.user);
      userDataFromLogin(userData);
      setUserAuth(true);
      userAuthFromLogin(userAuth);
      setTimeout(() => {
        navigate(`/message/${userData._id}`);
      }, 3000);
    } catch (error) {
      setLoginMessage("Incorrect Username or Password", error);
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
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="........"
        ></input>
        <button onClick={handleLogin}>submit</button>
      </form>
      <h4 onClick={loginValueChange}>a new User ? , Sign up</h4>
      <h2>{loginMessage}</h2>
    </div>
  );
}
