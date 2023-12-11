import { Alert } from "react-native"
import { Container, ErrorText } from "./styles"

export function ErrorMessage({ error }) {
  Alert.alert(
    "Error",
    error,
    [
      {text: 'ok'}
    ]
  )
}