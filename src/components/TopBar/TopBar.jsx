import React from "react";
import SearchBar from "../SearchBar";
import { styles } from "./styles";
import ProfileMenu from "./ProfileMenu";
import { Button } from "@mui/material";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
import { COLORS } from "../../colors/colors";
import NavigationButtons from "./NavigationButtons";

function TopBar() {
  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          //justifyContent: "space-around",
          width: "100%",
        }}
      >
        <NavigationButtons />
        <SearchBar />
        
      </div>
      <ProfileMenu />
    </div>
  );
}

export default TopBar;
