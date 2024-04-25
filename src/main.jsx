/* REACT DEPENDENCIES IMPORTS */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* COMPONENTS IMPORTS */
import App from "./components/App/App";

/* STYLES SHEETS IMPORTS */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
