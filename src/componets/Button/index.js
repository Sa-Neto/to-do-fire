import { ButtonText, ButtonToDo } from "./styles";

export function Button({text,handle}){

  return(
    <ButtonToDo onPress={() => handle()}>
      <ButtonText>{text}</ButtonText>
    </ButtonToDo>
  )
}