import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset.jsx";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/pwdreset" element={<PasswordReset />} />
      </Routes>
    </>
  );
}

export default App;
