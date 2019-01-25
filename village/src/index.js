import React from "react";
import ReactDOM from "react-dom";
import SmurfPostProvider from "./providers/SmurfPostProvider";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <SmurfPostProvider>
      <App />
    </SmurfPostProvider>
  </Router>,
  document.getElementById("root")
);
