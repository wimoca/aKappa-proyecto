import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSharedPlaylist } from "../../firebase/hooks/getSharedPlaylist";
import LoadingComponent from "../../components/LoadingComponent";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { Typography } from "@mui/material";

const SharedPlaylistPage = () => {
  const { userId, playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      setError(null);
      try {
        const sharedPlaylist = await getSharedPlaylist(userId, playlistId);
        if (sharedPlaylist) {
          setPlaylist(sharedPlaylist);
        } else {
          setError("Playlist not found.");
        }
      } catch (err) {
        setError("Error fetching playlist: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId && playlistId) {
      fetchPlaylist();
    }
  }, [userId, playlistId]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!playlist) {
    return <Typography>Playlist not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {playlist.name}
      </Typography>
      {playlist.playlistSet && playlist.playlistSet.length > 0 ? (
        playlist.playlistSet.map((song, index) => (
          <div key={song.id || index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Typography variant="body1" style={{ marginRight: '16px' }}>
              {index + 1}.
            </Typography>
            <ListSongCard song={song} />
          </div>
        ))
      ) : (
        <Typography>This playlist has no songs.</Typography>
      )}
    </div>
  );
};

export default SharedPlaylistPage;
