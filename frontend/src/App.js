import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Policy from "./pages/policy";
import Message from "./pages/message";

function App() {
  const [adminAuth, setAdminAuth] = useState(() => {
    const storedValue = localStorage.getItem("adminAuth");
    return storedValue === "true";
  });
  useEffect(() => {
    localStorage.setItem("adminAuth", adminAuth);
    console.log(adminAuth);
  }, [adminAuth]);
  const handleAdminAuth = (adminAuth) => {
    setAdminAuth(adminAuth);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/home"
              element={<Home adminAuthFromHome={handleAdminAuth} />}
            />
            <Route path="/policy" element={<Policy />} />
            <Route
              path="/message/:id"
              element={<Message adminAuth={adminAuth} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
