import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset/PasswordReset.jsx";
import "./App.css";
import OTPVerify from "./pages/OTPVerify/OTPVerify.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/pwdreset" element={<PasswordReset />} />
          <Route path="/OTPVerify" element={<OTPVerify />} />
      </Routes>
    </>
  );
}

export default App;
