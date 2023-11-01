import React from "react";
import SearchBar from "../SearchBar";
import {
  Bs0CircleFill,
  BsPSquare,
  BsPersonCircle,
  BsProjectorFill,
} from "react-icons/bs";
import { COLORS } from "../../colors/colors";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { setUserData } from "../../firebase/hooks/setUserData";

function TopBar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSingOut = async () => {
    await signOut(auth).then(navigate("/"));
  };
  const handleSubmitDoc = async () => {
    // SET FIRST STATE AfTER CREATING USERS
    await addDoc(collection(db, "users"), {
      id: user.uid,
      name: user.email,
      email: user.email,
      favorites: [],
      playlists: [],
      profilePhotoLink: "",
    });
  };
  return (
    <div style={styles.container}>
      <SearchBar />
      <BsPersonCircle
        style={styles.icon}
        //onClick={() => navigate("/profile")}
        onClick={() => handleSingOut()}
      />
      <BsPSquare style={styles.icon} onClick={() => handleSubmitDoc()} />
      <Bs0CircleFill style={styles.icon} onClick={() => setUserData()} />
      <BsProjectorFill
        style={styles.icon}
        onClick={() => navigate("/profile")}
      />
    </div>
  );
}

export default TopBar;
