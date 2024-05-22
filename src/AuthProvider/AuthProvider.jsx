import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
//Create an instance of the Google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user/ register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //longin user
  const longinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //To sign in with a pop-up window, call signInWithPopup
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //sing out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //observe auth state change
  useEffect(() => {
    const unSubsCrive = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current Value of current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCrive();
    };
  }, []);
  //share data
  const authInfo = {
    user,
    loading,
    createUser,
    longinUser,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
