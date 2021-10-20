import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword,onAuthStateChanged,
  signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import intialization from "../FirebaseAuth/FirebaseAuth";
intialization()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () =>{
  const [name, setName] = useState('')
    const [users, setUsers] = useState({})
    const[isLoading, setLoading] = useState(true)
    //google 
const signinWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
}
//email&pass
const createEmailPass = (email, pass) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, pass)
  .finally(()=> setLoading(false))
}
//login email pass
const loginEmailPass =(email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
  .finally(()=> setLoading(false))
}
//log Out
const logOut = () =>{
  setLoading(true)
    signOut(auth).then(() => {
        setUsers('')
      })
      .finally(()=> setLoading(false))
}
//update profile
const setuserName = () =>{
  updateProfile(auth.currentUser, {displayName: name})
  .then(() => {})
  window.location.reload();
}
//
useEffect(() =>{
  onAuthStateChanged(auth, (user) => {
      if (user) {
          setUsers(user)
      } 
      setLoading(false)
    });
}, [])
return{
    users,
    signinWithGoogle,
    logOut,
    createEmailPass,
    loginEmailPass,
    isLoading,
    setUsers,
    setName,
    setuserName,
}
}
export default useFirebase;