import { ActivityIndicator } from "react-native";
import { LoadingView } from "./styles";

export function Loading(){
  return(
    <LoadingView>
      <ActivityIndicator size={50} color={"#fff"} />
    </LoadingView>
  )
}