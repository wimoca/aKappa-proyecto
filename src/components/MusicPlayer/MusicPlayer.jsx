import React, { useContext, useEffect, useState } from "react";
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { styles } from "./styles";
import { COLORS } from "../../colors/colors";
import { isEmpty } from "./hooks/isEmpty";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { BsStarFill, BsStar } from "react-icons/bs";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import PlaylistButton from "../PlaylistButton";

function MusicPlayer() {
  const { currentSong, playlistSongs, setCurrentSong } =
    useContext(playerContext);
  const [currentTrack, setTrackIndex] = useState(0);

  if (currentTrack > playlistSongs.length) {
    setCurrentSong(0);
  }

  useEffect(() => {
    if (playlistSongs.length !== 0) {
      setCurrentSong(playlistSongs[currentTrack]);
    }
    console.log(playlistSongs);
  }, [playlistSongs, currentTrack]);

  const handleClickNext = () => {
    console.log("click next");
    if (playlistSongs.length !== 0) {
      setTrackIndex((currentTrack) =>
        currentTrack < playlistSongs.length - 1 ? currentTrack + 1 : 0
      );
    }
  };

  const handleEnd = () => {
    console.log("end");
    if (playlistSongs.length !== 0) {
      setTrackIndex((currentTrack) =>
        currentTrack < playlistSongs.length - 1 ? currentTrack + 1 : 0
      );
    }
  };

  if (isEmpty(currentSong)) {
    return;
  }

  return (
    <div style={styles.container}>
      <div style={{ marginRight: 10 }}>
        <img style={styles.cover} src={currentSong.coverLink} />
      </div>
      <div style={styles.songInformationContainer}>
        <div style={styles.artistInfo}>{currentSong.artist}</div>
        {currentSong.title.length > 15 ? (
          <marquee style={styles.songInfo} scrollamount="4">
            {currentSong.title}
          </marquee>
        ) : (
          <div style={styles.songInfo}>{currentSong.title}</div>
        )}

        {currentSong.album.length > 18 ? (
          <marquee style={styles.albumInfo} scrollamount="4">
            {currentSong.album}
          </marquee>
        ) : (
          <div style={styles.albumInfo}>{currentSong.album}</div>
        )}
      </div>
      <H5AudioPlayer
        src={
          playlistSongs.length == 0
            ? currentSong.link
            : playlistSongs[currentTrack].link
        }
        showSkipControls={playlistSongs.length == 0 ? false : true}
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        autoPlay
        volume={0.5}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <div>
            <FavoriteButton song={currentSong} />
          </div>,
          <div>
            <PlaylistButton />
          </div>,
        ]}
      />
    </div>
  );
}

export default MusicPlayer;
