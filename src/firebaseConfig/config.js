import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9xRPLP4EVnnmu1iEd0wTrDh8SDClAjdE",
  authDomain: "to-do-d9205.firebaseapp.com",
  databaseURL: "https://to-do-d9205-default-rtdb.firebaseio.com",
  projectId: "to-do-d9205",
  storageBucket: "to-do-d9205.appspot.com",
  messagingSenderId: "1094782579187",
  appId: "1:1094782579187:web:eabd09ca14b6247fb8e286"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence:  getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db = getDatabase(app)