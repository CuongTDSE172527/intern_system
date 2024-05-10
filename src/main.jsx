import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PasswordReset from '/src/pages/PasswordReset.jsx';
import OTPVerify from "./pages/OTPVerify.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(<PasswordReset />, document.getElementById('root'));
ReactDOM.render(<OTPVerify />, document.getElementById('root'));