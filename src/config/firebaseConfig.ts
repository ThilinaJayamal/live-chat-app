import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyAabJIhZdMfbsAssFJVS-IIbrFa8DFJZZc",
  authDomain: "rn-chat-5c93f.firebaseapp.com",
  projectId: "rn-chat-5c93f",
  storageBucket: "rn-chat-5c93f.appspot.com",
  messagingSenderId: "292202099191",
  appId: "1:292202099191:web:f0c365f373ab68bac2bef2",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});