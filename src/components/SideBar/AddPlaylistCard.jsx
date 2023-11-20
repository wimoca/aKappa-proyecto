import React from "react";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { FaSquarePlus } from "react-icons/fa6";
import { COLORS } from "../../colors/colors";

function AddPlaylistCard() {
  return (
    <ListItem disablePadding sx={{ padding: 0.8 }}>
      <ListItemButton sx={{ borderRadius: 2 }}>
        <ListItemIcon>
          <FaSquarePlus size={30} color={COLORS.accentColor} />
        </ListItemIcon>
        Crear Playlist
      </ListItemButton>
    </ListItem>
  );
}

export default AddPlaylistCard;
