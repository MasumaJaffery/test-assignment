import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHtwawDHZaP-CrNjQO2R9X4XFpjV_3wiY",
  authDomain: "cityscape-efb8a.firebaseapp.com",
  projectId: "cityscape-efb8a",
  storageBucket: "cityscape-efb8a.appspot.com",
  messagingSenderId: "880442282008",
  appId: "1:880442282008:web:646282b6e81b7af6e5b36d",
  measurementId: "G-7NG7MS9JNJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };
export default firebaseApp;
