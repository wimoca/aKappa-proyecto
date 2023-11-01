import {
  collection,
  getDocs,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../credenciales";
export const getOnSnapshotUserData = async (setData) => {
  await onSnapshot(
    query(collection(db, "users"), where("email", "==", auth.currentUser.email))
  ).then(async (querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      //id: doc.id,
    }));
    console.log(newData);
    await setData(newData);
  });
};
