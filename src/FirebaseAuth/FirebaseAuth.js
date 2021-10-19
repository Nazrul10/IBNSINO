import firebaseConfig from "./Firebase.confiq";
import { initializeApp } from "firebase/app";

const intialization = () =>{
    initializeApp(firebaseConfig);
}
export default intialization;