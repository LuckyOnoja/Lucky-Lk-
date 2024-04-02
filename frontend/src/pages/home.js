import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Signup from "../components/Signup";
import Login from "../components/login";
import Message from "./message";

export default function Home({adminAuthFromHome}) {
  const [signupValue, setSignupValue] = useState(() => {
    const storedValue = localStorage.getItem("signupValue");
    return storedValue === "true";
  });
  const [userAuth, setUserAuth] = useState(() => {
    const storedValue = localStorage.getItem("userAuth");
    return storedValue === "true";
  });
  const [adminAuth, setAdminAuth] = useState(() => {
    const storedValue = localStorage.getItem("adminAuth");
    return storedValue === "true";
  });
  const [loginValue, setLoginValue] = useState(() => {
    const storedValue = localStorage.getItem("loginValue");
    return storedValue === "true";
  });
  const [userData, setUserData] = useState();

  //useEffect hooks for storing the staet items in the local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("signUpValue", signupValue);
  }, [signupValue]);
  useEffect(() => {
    localStorage.setItem("userAuth", userAuth);
    console.log(userAuth);
  }, [userAuth]);
  useEffect(() => {
    localStorage.setItem("adminAuth", adminAuth);
    console.log(adminAuth);
  }, [adminAuth]);
  useEffect(() => {
    localStorage.setItem("loginValue", loginValue);
  }, [loginValue]);

  const handleSignupValue = (signupValue) => {
    // This function receives data from the child component and updates the state in the parent.
    setSignupValue(signupValue);
  };
  const handleUserAuth = (userAuth) => {
    // This function receives data from the child component and updates the state in the parent.
    setUserAuth(userAuth);
  };
  const handleAdminAuth = (adminAuth) => {
    // This function receives data from the child component and updates the state in the parent.
    setAdminAuth(adminAuth);
    adminAuthFromHome(adminAuth)
  };

  const handleLoginvalue = (loginValue) => {
    setLoginValue(loginValue);
  };

  const handleUserData = (userData) => {
    setUserData(userData);
    console.log(userData);
  };

  return (
    <div>
      <Navbar />

      <div className="subjects">
        <div className="blur">
          <img src="../Assets/bg1.jpg" />
        </div>
        <h1>
          I am Lucky LK Onoja a very insightful , creative and experienced full
          stack website developer . I've been on this journey for about 2 years
          now and alot of values like : Commitment , Consistency , Coordination
          , Discipline ... and many more became art of me along the line .
          <br />
          Through those Years I have worked on various projects on different
          contexts such as a movie Web app , a music player website , a Donation
          website , different websites for individuals and more to come .
        </h1>
        <div className="imagesDiv">
          <figure>
            <img src="../Assets/img1.jpg " />
            <img src="../Assets/Lucky LK logo.png" />
            <img src="../Assets/img5.jpg " />
            <img src="../Assets/img3.jpg " />
            <img src="../Assets/img1.jpg " />
          </figure>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skillDiv">
          <span>
            <h2>HTML</h2> <i class="fa-brands fa-html5 html"></i>
          </span>
          <span>
            <h2> CSS</h2>
            <i class="fa-brands fa-css3-alt css"></i>
          </span>
          <span>
            <h2>JAVASCRIPT </h2> <i class="fa-brands fa-js js"></i>
          </span>
          <span>
            <h2> EJS</h2>
            <i class="fa-brands fa-vuejs ejs"></i>
          </span>
          <span>
            <h2>REACT JS</h2>
            <i class="fa-brands fa-react react"></i>
          </span>
          <span>
            <h2>NODE JS</h2>
            <i class="fa-brands fa-node node"></i>
          </span>
          <span>
            <h2>MONGO DB </h2>
            <i class="fa-solid fa-database mongo"></i>
          </span>
        </div>
      </div>
      <div className="questions">
        <h1>What can I contribute ? </h1>
        <h3>
          I will contribute maximally to any Company , Individual , Institution
          , Foundation or Entity I encounter , with my ideas , skills and values{" "}
          .
        </h3>
        <h1>What is My Experience ? </h1>
        <h3>
          I have worked with Loctech Institute , there i played a role as a Full
          Stack Web Developer. <br />I also walked at a company called cuba ,
          where i functioned as a Backend Engineer.
        </h3>
        <h1>Certification ? </h1>
        <h3>
          I was Certified as a Full stack website developer on august 2021 by
          the Loctech Institute, Nigeria.
        </h3>
      </div>
      <div className="websiteLinks">
        <h1>Links</h1>
        <a href="jbbwbdiwdb.com">Gmail link</a>
        <br />
        <a href="jbbwbdiwdb.com">Github link</a>
        <br />
        <a href="jbbwbdiwdb.com">LinkedIn link</a>
        <br />
        <a href="jbbwbdiwdb.com">Lucky LK</a>
        <br />
        <a href="jbbwbdiwdb.com">Tvtrend Link</a>
        <br />
        <a href="jbbwbdiwdb.com">Music player Link</a>
        <br />
      </div>
      <Footer signupValueFromFooter={handleSignupValue} userAuth={userAuth} />
      {signupValue && (
        <Signup
          userAuthFromSignup={handleUserAuth}
          loginValueFromSignup={handleLoginvalue}
          userDataFromSignup={handleUserData}
        />
      )}
      {loginValue && (
        <Login
          userAuthFromLogin={handleUserAuth}
          loginValueFromSignup={handleLoginvalue}
          userDataFromLogin={handleUserData}
          adminAuthFromLogin={handleAdminAuth}
        />
      )}
    </div>
  );
}
