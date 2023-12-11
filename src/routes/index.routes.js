import { useState } from "react";
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig/config";
import { Text } from "react-native";
import { Loading } from "../componets/Loading";


export default function Routes(){
  const [user, setUser] = useState(undefined);
 
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })
  },[auth])

  if(loadingUser){
   return <Loading/>
  }

  return(
   user ? <AppRoutes/> : <AuthRoutes/>
  )
}