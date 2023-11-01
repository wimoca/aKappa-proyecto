import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerState from "./context/PlayerContext/PlayerState.jsx";
import AuthUserProvider from "./context/AuthContext/AuthUserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/aKappa-proyecto">
    <PlayerState>
      <App />
    </PlayerState>
  </BrowserRouter>
);
