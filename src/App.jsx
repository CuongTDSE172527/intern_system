import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset/PasswordReset.jsx";
import "./App.css";
import OTPVerify from "./pages/OTPVerify/OTPVerify.jsx";
import EnterNewPass from "./pages/EnterNewPass/EnterNewPass.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/pwdreset" element={<PasswordReset />} />
          <Route path="/OTPVerify" element={<OTPVerify />} />
          <Route path="/EnterNewPass" element={<EnterNewPass />} />
      </Routes>
    </>
  );
}

export default App;
