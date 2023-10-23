import React from "react";
import SearchBar from "../SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { COLORS } from "../../colors/colors";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
function TopBar() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <SearchBar />
      <BsPersonCircle
        style={styles.icon}
        onClick={() => navigate("/profile")}
      />
    </div>
  );
}

export default TopBar;
