import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthentication;