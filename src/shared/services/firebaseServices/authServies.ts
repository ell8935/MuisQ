import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => signOut(auth);

export { loginWithGoogle, googleLogout };
