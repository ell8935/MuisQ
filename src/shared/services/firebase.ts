import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../constants/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const getExpiredDate = () => {
  const expiredDate = new Date();
  expiredDate.setDate(expiredDate.getDate() + 2);

  return expiredDate;
};

export { db, auth, getExpiredDate };
