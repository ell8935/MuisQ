import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../shared/services/firebase";
import { GoogleAuthProvider, User, signInWithPopup, signOut } from "firebase/auth";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);
    await saveUserinDb(user);
    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => {
  signOut(auth);
};

const saveUserinDb = async (user: User) => {
  await setDoc(doc(db, "Users", user.uid), {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    playlists: {},
  });
};

export { loginWithGoogle, googleLogout };
