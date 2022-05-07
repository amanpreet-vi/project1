import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/controller/landingPage";
import "./index.css";
// import App from "./App"; not used here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
