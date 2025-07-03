import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJdtxFGqjrkZUsvnqOC2qsxS1Zxqu7N1w",
    authDomain: "mockprep-cf15a.firebaseapp.com",
    projectId: "mockprep-cf15a",
    storageBucket: "mockprep-cf15a.firebasestorage.app",
    messagingSenderId: "661338968353",
    appId: "1:661338968353:web:4274f8da1fb30f2206ee60",
    measurementId: "G-60TX9P66ZZ"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);