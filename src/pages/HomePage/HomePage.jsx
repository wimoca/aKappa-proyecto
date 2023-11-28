import React, { useContext } from "react";
import "./styles.css";
import MusicPlayer from "../../components/MusicPlayer";
import { useState } from "react";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import TopBar from "../../components/TopBar/TopBar";
import songs from "../../assets/songs.json";
import SideBar from "../../components/SideBar";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import HomePageGenreCard from "./HomePageGenreCard";
import Banner from "../../assets/BannerNoBorder.png";
import BannerLogo from "../../assets/LogoNo.png";
import { Box, Typography } from "@mui/material";
import HomePageArtistCard from "./HomePageArtistCard";

function HomePage() {
  //const genres = ["Rock", "Regueton", "Pop", "Rap", "House", "Esrock"];
  const genres = [
    {
      id: 1,
      name: "Rock",
      background:
        "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rock",
    },
    {
      id: 2,
      name: "Regueton",
      background:
        "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Reguetón",
    },
    {
      id: 3,
      name: "Pop",
      background:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Pop",
    },
    {
      id: 4,
      name: "Rap",
      background:
        "https://images.pexels.com/photos/1238980/pexels-photo-1238980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rap",
    },
    {
      id: 5,
      name: "House",
      background:
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "House",
    },
    {
      id: 6,
      name: "Esrock",
      background:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rock en Español",
    },
  ];

  const { songsList, setCurrentSong, setPlaylistSongs } =
    useContext(playerContext);

  function onHandleClick(music) {
    setPlaylistSongs([]);
    setCurrentSong(music);
  }
  if (songsList.length == 0) {
    return <LoadingComponent />;
  }
  return (
    <div
      style={{
        position: "relative",
        //width: "100%",
      }}
    >
      <div>
        <img
          src={Banner}
          style={{
            maxWidth: "79%",
            height: "auto",
            opacity: 0.04,
            position: "fixed",
          }}
        />
      </div>
      <div style={{ top: "0%" }}>
        <Box
          sx={{
            maxWidth: "100%",
            height: 350,
            //backgroundColor: "red",
            borderRadius: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img src={BannerLogo} style={{ width: 300, height: 150 }} />
        </Box>
        {/* ARTISTAS DESTACADOS */}
        <Typography variant="h5" marginBottom={1} fontWeight={500}>
          ARTISTAS DESTACADOS
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          {genres.slice(0, 3).map((genre) => {
            return <HomePageArtistCard genre={genre} key={genre.id} />;
          })}
        </div>
        <Typography variant="h5" marginBottom={1} fontWeight={500}>
          GÉNEROS MUSICALES
        </Typography>

        {/* GENEROS MUSICALER */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {genres.map((genre) => {
            return <HomePageGenreCard genre={genre} key={genre.id} />;
          })}
        </div>
      </div>
    </div>

    // <div>
    //   <div style={styles.cardContainer}>
    //     {songsList.map((song) => (
    //       <SongCard
    //         song={song}
    //         onClick={() => onHandleClick(song)}
    //         key={song.id}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

export default HomePage;
