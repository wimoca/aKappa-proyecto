import React, { useContext, useEffect } from "react";
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { styles } from "./styles";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext";
import { isEmpty } from "./hooks/isEmpty";
import { BsStarFill, BsStar } from "react-icons/bs";

function MusicPlayer() {
  const { currentSong } = useContext(playerContext);

  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  return (
    <div style={styles.container}>
      <div style={{ marginRight: 10 }}>
        <img
          style={styles.cover}
          src={
            !isEmpty(currentSong)
              ? currentSong.cover
              : "https://files.readme.io/f2e91bb-portalDocs-sonosApp-defaultArtAlone.png"
          }
        />
      </div>
      <div style={styles.songInformationContainer}>
        <div style={styles.artistInfo}>
          {!isEmpty(currentSong) ? currentSong.artist : ""}
        </div>
        {!isEmpty(currentSong) && currentSong.title.length > 15 ? (
          <marquee style={styles.songInfo} scrollamount="4">
            {!isEmpty(currentSong) ? currentSong.title : ""}
          </marquee>
        ) : (
          <div style={styles.songInfo}>
            {!isEmpty(currentSong) ? currentSong.title : ""}
          </div>
        )}

        {!isEmpty(currentSong) && currentSong.album.length > 18 ? (
          <marquee style={styles.albumInfo} scrollamount="4">
            {!isEmpty(currentSong) ? currentSong.album : ""}
          </marquee>
        ) : (
          <div style={styles.albumInfo}>
            {!isEmpty(currentSong) ? currentSong.album : ""}
          </div>
        )}
      </div>
      <H5AudioPlayer
        src={!isEmpty(currentSong) ? currentSong.link : ""}
        showSkipControls
        autoPlay
        volume={0.5}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <div>
            {currentSong.isFavorite ? (
              <BsStarFill color={COLORS.accentColor} size={22} />
            ) : (
              <BsStar color={COLORS.accentColor} size={22} />
            )}
          </div>,
        ]}
      />
    </div>
  );
}

export default MusicPlayer;
