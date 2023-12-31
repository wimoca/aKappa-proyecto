import React, { useContext } from "react";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";
import { BsFillHouseFill, BsStarFill } from "react-icons/bs";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import playerContext from "../../context/PlayerContext/PlayerContext";
import PlaylistCard from "./PlaylistCard";
import LoadingComponent from "../LoadingComponent";
import AddPlaylistCard from "./AddPlaylistCard";
function SideBar() {
  const { userData } = useContext(playerContext);
  const navigate = useNavigate();

  if (userData.length == 0) {
    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "20%",
          backgroundColor: COLORS.highlightBackgroundColor,
          borderRadius: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <LoadingComponent />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "20%",
        backgroundColor: COLORS.highlightBackgroundColor,
        borderRadius: 20,
      }}
    >
      <List sx={{ overflow: "hidden" }}>
        <ListItem disablePadding sx={{ padding: 0.8 }}>
          <ListItemButton
            sx={{ borderRadius: 2 }}
            onClick={() => navigate("/")}
          >
            <ListItemIcon>
              <BsFillHouseFill fontSize={30} color={COLORS.accentColor} />
            </ListItemIcon>
            <div style={{ color: COLORS.accentColor }}>Página Principal</div>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ padding: 0.8 }}>
          <ListItemButton
            sx={{ borderRadius: 2 }}
            onClick={() => navigate("/favorites")}
          >
            <ListItemIcon>
              <BsStarFill fontSize={30} color={COLORS.accentColor} />
            </ListItemIcon>
            <div style={{ color: COLORS.accentColor }}>Favoritos</div>
          </ListItemButton>
        </ListItem>
        <Divider />
        <AddPlaylistCard />
        {userData[0]["playlists"].map((playlist) => {
          return (
            <div key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </div>
          );
        })}
      </List>
      {/* <div
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
      </div> */}
    </div>
  );
}

export default SideBar;
