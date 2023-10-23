import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerState from "./context/PlayerState.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/aKappa-proyecto">
    <PlayerState>
      <App />
    </PlayerState>
  </BrowserRouter>
);
