import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDxj0ZorNcMbn5pCJzC9D9YA81-IEltBo4",
  authDomain: "fir-auth-968c6.firebaseapp.com",
  projectId: "fir-auth-968c6",
  storageBucket: "fir-auth-968c6.appspot.com",
  messagingSenderId: "306345977277",
  appId: "1:306345977277:web:96ced7956b3ba8a98b1ed4",
  measurementId: "G-W99XL7732X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;
// const analytics = getAnalytics(app);