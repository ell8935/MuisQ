import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../constants/firebaseConfig";
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const realTimeDatabase = getDatabase(app);

export { db, auth, realTimeDatabase };
