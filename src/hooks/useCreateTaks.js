import { useState } from "react";
import { db } from "../firebaseConfig/config";
import { child, push, ref, set } from "firebase/database";

export const useCreateTaks = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  function checkIfIsCancelled(){
    if(cancelled){
      return
    }
  }

  const createTask = async (userId,task) => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try{
      await push(ref(db, 'userId/',userId), {
        title:task
      }).then(() => {
        console.log("cERTO")
      })
    }catch(err) {
      console.log(err)
      setLoading(false)
      setError(null)
    }
  }

  return{
    createTask,
    error,
    loading,
  }
}