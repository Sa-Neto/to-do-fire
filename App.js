import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes/index.routes";
import { AuthProvider } from "./src/contexts/AuthContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebaseConfig/config";
import { useState } from "react";

export default function App() {
  const [user,setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        setUser(user)
      }else{
        console.log('não deu certo')
      }
    })
  },[auth])
  return (
    <NavigationContainer>
      <AuthProvider value={{user}}>
        <StatusBar backgroundColor="#323232" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}


