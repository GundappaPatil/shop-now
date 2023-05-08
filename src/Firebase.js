
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC7w_HETFO3WtNmZtlgxyWBriSuVmGZlHc",
  authDomain: "shop-now-d2003.firebaseapp.com",
  projectId: "shop-now-d2003",
  storageBucket: "shop-now-d2003.appspot.com",
  messagingSenderId: "991287979900",
  appId: "1:991287979900:web:ed752e81bcb9346d1c3ef9",
  measurementId: "G-NTDK0P9P2W"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
