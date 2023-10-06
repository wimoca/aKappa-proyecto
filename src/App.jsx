//import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MusicPlayer from "./components/MusicPlayer";
import songs from "./assets/songs.json";
import SearchBar from "./components/SearchBar";
import TopBar from "./pages/HomePage/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="aKappa-Proyecto/search/:searchTerm"
          element={<SearchPage />}
        />
        <Route path="/aKappa-Proyecto" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
