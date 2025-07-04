import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: "mockprep-cf15a",
    storageBucket: "mockprep-cf15a.firebasestorage.app",
    messagingSenderId: "661338968353",
    appId: "1:661338968353:web:4274f8da1fb30f2206ee60",
    measurementId: "G-60TX9P66ZZ"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);