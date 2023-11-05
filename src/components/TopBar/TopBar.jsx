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
        <div
          style={{
            marginRight: 20,
            backgroundColor: COLORS.highlightBackgroundColor,
            height: "87%",
            borderRadius: 50,
          }}
        >
          <div style={{ whiteSpace: "nowrap" }}>
            <Button
              size="small"
              sx={{
                borderRadius: 50,
                color: COLORS.textColor,
                "&:hover": {
                  borderRadius: 50,
                },
              }}
            >
              <BiSolidLeftArrowCircle size={30} color={COLORS.accentColor} />
            </Button>
            <Button
              size="small"
              sx={{
                borderRadius: 50,
                overflow: "clip",
                color: COLORS.textColor,
                "&:hover": {
                  borderRadius: 50,
                },
              }}
            >
              <BiSolidRightArrowCircle size={30} color={COLORS.accentColor} />
            </Button>
          </div>
        </div>

        <SearchBar />
      </div>
      <ProfileMenu />
    </div>
  );
}

export default TopBar;
