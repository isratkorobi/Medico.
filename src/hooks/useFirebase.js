import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Component/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const auth = getAuth();
  const signInGoogle = () => {
    setIsloading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }else{
        setUser({})
      } 
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({})
      })
      
      .finally(() => setIsloading(false));
  };




 const signInEmail = () => {
   
 }

  return {
    user,
    signInGoogle,
    logOut,
    isLoading,

  };
};
export default useFirebase;
