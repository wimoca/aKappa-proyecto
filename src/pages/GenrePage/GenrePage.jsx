import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";

function GenrePage() {
  const { songsList, setPlaylistSongs, setCurrentSong } =
    useContext(playerContext);
  const [genreSongs, setGenreSongs] = useState([]);
  const { genreName } = useParams();

  function onHandleClick(song) {
    setPlaylistSongs([]);
    setCurrentSong(song);
  }

  useEffect(() => {
    setGenreSongs(
      songsList.filter((song) => {
        return song.gender == genreName;
      })
    );
  }, [songsList]);

  if (songsList.length == 0) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div style={styles.cardContainer}>
        {genreSongs.map((song) => (
          <SongCard
            song={song}
            onClick={() => onHandleClick(song)}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default GenrePage;