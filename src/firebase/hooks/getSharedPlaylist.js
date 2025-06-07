import { doc, getDoc } from "firebase/firestore";
import { db } from "../credenciales";

export async function getSharedPlaylist(userId, playlistId) {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const playlists = userData.playlists || [];
      const playlist = playlists.find((p) => p.id === playlistId);

      if (playlist) {
        return playlist;
      } else {
        console.error("Playlist not found");
        return null;
      }
    } else {
      console.error("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching shared playlist:", error);
    throw error; // Re-throw the error to allow for further handling if needed
  }
}
