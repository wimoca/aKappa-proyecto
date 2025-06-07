import { Button, Typography, IconButton, TextField, Modal, Box, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ShareIcon from '@mui/icons-material/Share';
import LoadingComponent from "../../components/LoadingComponent";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { COLORS } from "../../colors/colors";
import { FaPlay } from "react-icons/fa6";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PlaylistPage() {
  const { userData, playlistIndex, setPlaylistIndex, setPlaylistSongs } =
    useContext(playerContext);
  const { playlistId } = useParams();
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [copiedTooltipOpen, setCopiedTooltipOpen] = useState(false);

  let playlistData =
    userData.length === 0
      ? null
      : userData[0].playlists.find((playlist) => playlist.id == playlistId);

  const handleOpenShareModal = () => {
    if (userData && userData.length > 0 && userData[0].id && playlistData && playlistData.id) {
      const link = `${window.location.origin}/share/user/${userData[0].id}/playlist/${playlistData.id}`;
      setShareLink(link);
      setShareModalOpen(true);
    } else {
      console.error("User ID or Playlist ID is missing for sharing.");
      // Optionally, disable the button or show a message
    }
  };

  const handleCloseShareModal = () => {
    setShareModalOpen(false);
    setCopiedTooltipOpen(false); // Reset tooltip state
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopiedTooltipOpen(true);
      setTimeout(() => setCopiedTooltipOpen(false), 2000); // Hide tooltip after 2s
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handlePlayPlaylist = () => {
    if (playlistData && playlistData.playlistSet) {
      setPlaylistSongs([...playlistData.playlistSet]);
      setPlaylistIndex(0);
      console.log(playlistIndex, "playlistPageButton");
    }
  };

  const handlePlaylistIndex = (index) => {
    if (playlistData && playlistData.playlistSet) {
      setPlaylistIndex(index);
      setPlaylistSongs(playlistData.playlistSet);
      console.log(index, "playlistPage");
    }
  };

  if (userData.length === 0 || !playlistData) {
    // Combined loading/not found logic for simplicity, can be separated
    return <LoadingComponent />;
  }

  // Ensure playlistData is defined before trying to access its properties
  if (playlistData == undefined) {
    return <div>NO EXISTE LA PLAYLIST</div>;
  }

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          {playlistData.name}
        </Typography>
        {userData[0]?.id && playlistData?.id && (
          <Tooltip title="Share Playlist">
            <IconButton onClick={handleOpenShareModal} sx={{ color: COLORS.textColor }}>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Button
        onClick={handlePlayPlaylist}
        disabled={!playlistData || !playlistData.playlistSet || playlistData.playlistSet.length === 0}
        sx={{
          backgroundColor: COLORS.highlightBackgroundColor,
          color: COLORS.textColor,
          borderRadius: 20,
          paddingRight: 3,
          paddingLeft: 3,
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaPlay size={18} style={{ marginRight: 10 }} />
          Reproducir Playlist
        </div>
      </Button>
      {playlistData.playlistSet && playlistData.playlistSet.length > 0 ? (
        playlistData.playlistSet.map((song, index) => {
          return (
            <div key={song.id || index} style={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ marginRight: 2 }} variant="body1" fontWeight={500}>
                {index + 1}
              </Typography>
              <div style={{ width: "100%" }}>
                <ListSongCard
                  song={song}
                  isInPlaylist={true}
                  playlistId={playlistId}
                  onClick={() => handlePlaylistIndex(index)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <Typography>This playlist is empty.</Typography>
      )}

      <Modal
        open={shareModalOpen}
        onClose={handleCloseShareModal}
        aria-labelledby="share-playlist-modal-title"
        aria-describedby="share-playlist-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="share-playlist-modal-title" variant="h6" component="h2">
            Share Playlist
          </Typography>
          <TextField
            fullWidth
            readOnly
            value={shareLink}
            sx={{ mt: 2, mb: 2 }}
            label="Shareable Link"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button onClick={handleCloseShareModal}>Close</Button>
            <Tooltip title={copiedTooltipOpen ? "Copied!" : "Copy to clipboard"} open={copiedTooltipOpen} placement="top">
              <Button variant="contained" onClick={handleCopyLink}>
                Copy Link
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default PlaylistPage;
            <Typography sx={{ marginRight: 2 }} variant="body" fontWeight={500}>
              {index + 1}
            </Typography>
            <div style={{ width: "100%" }}>
              <ListSongCard
                song={song}
                isInPlaylist={true}
                playlistId={playlistId}
                onClick={() => handlePlaylistIndex(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlaylistPage;
