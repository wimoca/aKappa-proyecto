import React, { useContext, useEffect } from "react";
import "./styles.css";
import MusicPlayer from "../../components/MusicPlayer";
import { useState } from "react";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import TopBar from "../../components/TopBar/TopBar";
import songs from "../../assets/songs.json";
import { getData } from "../../firebase/hooks/getData";
import playerContext from "../../context/PlayerContext";

function HomePage() {
  const { songsList, currentSong, setCurrentSong } = useContext(playerContext);
  const [playerKey, setPlayerKey] = useState(0);
  const [music, setMusic] = useState(null);

  useEffect(() => {
    //getData();
  }, []);

  function onHandleClick(music) {
    //setMusic(music);
    setCurrentSong(music);
    setPlayerKey((key) => key + 1);
  }
  return (
    <div>
      <div style={styles.cardContainer}>
        {songsList.map((song) => (
          <SongCard
            song={song}
            onClick={() => onHandleClick(song)}
            key={song.id}
          />
        ))}
      </div>
      {/* <div style={styles.musicPlayerContainer}>
        <MusicPlayer />
      </div> */}
    </div>
  );
}

export default HomePage;
