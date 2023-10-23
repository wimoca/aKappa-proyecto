import React, { useReducer } from "react";
import playerReducer from "./PlayerReducer";
import playerContext from "./PlayerContext";
import songs from "../assets/songs.json";

function PlayerState(props) {
  const initialState = {
    currentSong: {},
    songsList: songs,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setCurrentSong = (song) =>
    dispatch({ type: "SET_CURRENT_SONG", data: song });

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songsList: state.songsList,
        setCurrentSong,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
}

export default PlayerState;
