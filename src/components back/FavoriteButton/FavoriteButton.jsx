import React, { useContext, useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { COLORS } from "../../colors/colors";
import { updateFavorites } from "../../firebase/hooks/updateFavorites";
import { removeFavorites } from "../../firebase/hooks/removeFavorites";
import { getUserData } from "../../firebase/hooks/getUserData";

function FavoriteButton({ song }) {
  const { userData, setUserData } = useContext(playerContext);
  const [data, setData] = useState([]);

  const onHandleClickAdd = async (song) => {
    await updateFavorites(song);
    await getUserData(setUserData);
  };
  const onHandleClickRemove = async (song) => {
    await removeFavorites(song);
    await getUserData(setUserData);
  };

  useEffect(() => {
    setData(userData);
  }, [userData]);

  if (data.length == 0) {
    return null;
  }
  if (data[0]["favorites"].some((item) => item.id === song.id)) {
    return (
      <BsStarFill
        color={COLORS.accentColor}
        size={22}
        onClick={() => onHandleClickRemove(song)}
      />
    );
  } else {
    return (
      <BsStar
        color={COLORS.accentColor}
        size={22}
        onClick={() => onHandleClickAdd(song)}
      />
    );
  }
}

export default FavoriteButton;
