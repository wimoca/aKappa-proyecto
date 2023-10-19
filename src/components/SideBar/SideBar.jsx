import React from "react";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "20%",
        backgroundColor: COLORS.highlightBackgroundColor,
      }}
    >
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          padding: 20,
          justifyContent: "space-evenly",
          cursor: "pointer",
        }}
      >
        <BsFillHouseFill fontSize={35} color={COLORS.accentColor} />
        <div style={{ color: COLORS.accentColor }}>Página Principal</div>
      </div>
    </div>
  );
}

export default SideBar;
