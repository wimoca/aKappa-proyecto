import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getData = async () => {
  await getDocs(collection(db, "songs")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(newData);
  });
};
