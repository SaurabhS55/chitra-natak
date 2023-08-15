import {initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKF9RVyqgyi-ISfpHQv_MXNyWi4-PZmh4",
  authDomain: "chitra-natak.firebaseapp.com",
  projectId: "chitra-natak",
  storageBucket: "chitra-natak.appspot.com",
  messagingSenderId: "359809343019",
  appId: "1:359809343019:web:b69b30fc46d6818656d46e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
