import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebaseConfig/config";
import { useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(null);

  const [cancelled,setCancelled] = useState(false);

  function checkIfIsCancelled(){
    if(cancelled){
      return
    }
  }

  // Register
  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)
    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(user,{
        displayName:data.displayName
      })
      console.log(user,"user")
      setLoading(false)
      return user
    } catch (error) {
      let systemErrorMessage
      if(error.message.includes("Password")){
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
      }else if (error.message.includes("email-already")){
        systemErrorMessage = "E-mail já cadastrado"
      }else if(error.message.includes("auth/invalid-email")){
        systemErrorMessage = "Digite um email válido"
      }
      
      else{
        systemErrorMessage = "Ocorreu erro, por favor tente mais tarde"
      }
      setError(systemErrorMessage)
      setLoading(false)
    }  
  }

  const login = async(data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth,data.email,data.password)
      .then((userCrendential) => {
        console.log(userCrendential.user)
      })
      setLoading(false)
      
    } catch (error) {
      console.log(typeof error.message)
      let systemErrorMessage
      if(error.message.includes("user-not-found")){
        systemErrorMessage = "Usuario não encontrado."
      }else if(error.message.includes("wrong-password")){
        systemErrorMessage = "Senha incorreta"
      }else{
        systemErrorMessage = "Ocorre um erro,por favor tente mais tarde"
      }
      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  const exit = async() => {
    checkIfIsCancelled()
    signOut(auth)
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    return() => setCancelled(true)
  },[])

  return{
    error,
    loading,
    createUser,
    login,
    exit,
  }
}