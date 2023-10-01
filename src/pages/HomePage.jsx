import React, { useEffect } from "react";
import "./styles.css";
import MusicPlayer from "../components/MusicPlayer";
import { COLORS } from "../colors/colors";
import { useState } from "react";

function HomePage() {
  const [playerKey, setPlayerKey] = useState(0);
  const [music, setMusic] = useState(null);
  function onHandleClick(music) {
    console.log(music);
    setMusic(music);
    setPlayerKey((key) => key + 1);
  }

  const songs = [
    {
      title: "Harder, Better, Faster, Stronger",
      id: 1,
      artist: "Daft Punk",
      link: "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
    },
    {
      title: "Blank Space",
      id: 2,
      artist: "Taylor Swift",
      link: "https://cdns-preview-6.dzcdn.net/stream/c-6e5160a0eb0a1e062f294a21148fd2fc-8.mp3",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/500x500-000000-80-0-0.jpg",
    },
    {
      title: "Bohemian Rhapsody",
      id: 3,
      artist: "Queen",
      link: "https://cdns-preview-1.dzcdn.net/stream/c-17597947a0fdd6e8ea971f146755cd34-13.mp3",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/500x500-000000-80-0-0.jpg",
    },
    {
      title: "Circles",
      id: 4,
      artist: "Post Malone",
      link: "https://cdns-preview-d.dzcdn.net/stream/c-df36f056f3f9770ab7b7b466e32975fd-7.mp3",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/4642b8e3e0a89f92a6e2bfed13d8f31c/500x500-000000-80-0-0.jpg",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "sticky", top: 0 }}>
        <div>PAGINA PRINCIPAL</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {songs.map((song) => (
          <div
            key={song.id}
            style={{
              height: 200,
              aspectRatio: 1,
              backgroundColor: COLORS.accentColor,
              margin: 10,
            }}
            onClick={() => onHandleClick(song)}
          >
            <img
              src={song.cover}
              style={{ height: "100%", aspectRatio: 1, paddingLeft: 5 }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
        }}
      >
        <MusicPlayer song={music} key={playerKey} />
      </div>
    </div>
  );
}

export default HomePage;
