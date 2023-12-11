import {InputText} from "./styles"
export function Input({value,setValue,placeholder,}){
  return(
    
    <InputText
      placeholder={placeholder}
      placeholderTextColor="rgba(255,255,255,.5) "
      value={value}
      onChangeText={setValue}
    />
    
  )
}