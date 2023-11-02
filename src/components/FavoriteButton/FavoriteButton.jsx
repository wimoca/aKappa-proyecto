import React, { useContext, useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { COLORS } from "../../colors/colors";
import { updateFavorites } from "../../firebase/hooks/updateFavorites";
import { removeFavorites } from "../../firebase/hooks/removeFavorites";
import { getUserData } from "../../firebase/hooks/getUserData";
import { Alert, Button, Snackbar } from "@mui/material";
import { isEmpty } from "../MusicPlayer/hooks/isEmpty";

function FavoriteButton({ song }) {
  const { userData, setUserData, currentSong } = useContext(playerContext);
  const [data, setData] = useState(userData);
  const [track, setTrack] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = async (song, action) => {
    if (isEmpty(song)) {
      return;
    }
    if (action == "add") {
      await updateFavorites(song);
      setIsOpen(true);
      console.log("add");
    } else {
      await removeFavorites(song);
      setIsOpen(true);
      console.log("remove");
    }
  };

  const onHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      setIsOpen(false);
    }
    setIsOpen(false);
  };
  // const onHandleClickAdd = async (song) => {
  //   await updateFavorites(song).then(() => getUserData(setUserData));
  //   console.log("add");
  // };
  // const onHandleClickRemove = async (song) => {
  //   await removeFavorites(song).then(() => getUserData(setUserData));
  //   console.log("remove");
  // };

  // useEffect(() => {
  //   setData([...userData]);
  // }, [userData]);

  if (userData.length == 0) {
    return null;
  }

  if (userData[0]["favorites"].some((item) => item.id === song.id)) {
    return (
      <div>
        <Snackbar
          open={isOpen}
          autoHideDuration={2500}
          onClose={onHandleClose}
          //message="Note archived"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          //action={action}
        >
          <Alert severity="success" onClose={onHandleClose}>
            Añadido a Favoritos
          </Alert>
        </Snackbar>
        <Button onClick={() => onHandleClick(song, "remove")}>
          <BsStarFill color={COLORS.accentColor} size={22} />
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Snackbar
          open={isOpen}
          autoHideDuration={2500}
          onClose={onHandleClose}
          //message="Note archived"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          //action={action}
        >
          <Alert severity="warning" onClose={onHandleClose}>
            Removido de Favoritos
          </Alert>
        </Snackbar>
        <Button onClick={() => onHandleClick(song, "add")}>
          <BsStar color={COLORS.accentColor} size={22} />
        </Button>
      </div>
    );
  }
}

export default FavoriteButton;
