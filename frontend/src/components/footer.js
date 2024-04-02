import { useState } from "react";

export default function Footer({ signupValueFromFooter,userAuth }) {
  const [signupValue, setSignupValue] = useState(() => {
    const storedValue = localStorage.getItem("signupValue");
    return storedValue === "true";
  });

  const showSignUpValue = () => {
    setSignupValue(!signupValue);
    signupValueFromFooter(signupValue);
  };

  return (
    <div className="footerContainer ">
      <a href="/policy">
        <h1>@ Privacy policy for Lucky LK</h1>
      </a>
    {!userAuth &&<button onClick={showSignUpValue}>Message me</button>}
    </div>
  );
}
