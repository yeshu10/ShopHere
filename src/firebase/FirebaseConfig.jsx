import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcB9y4H8E4fWQAc6LHkjoaTD48U2VHrqo",
  authDomain: "myecommerceapp-a6170.firebaseapp.com",
  projectId: "myecommerceapp-a6170",
  storageBucket: "myecommerceapp-a6170.appspot.com",
  messagingSenderId: "182235963871",
  appId: "1:182235963871:web:7e51a9df47618accd7646a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;