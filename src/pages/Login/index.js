import { useState } from "react";
import { Input } from "../../componets/Input/Input";
import { ButtonNavigator, Container, ContainerForm, TextNavigator, Title } from "./styles";
import { Button } from "../../componets/Button";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { useAuthentication } from "../../hooks/useAuthentication";
import { ButtonLoading } from "../../componets/ButtonLoading/ButtonLoading";
import { ErrorMessage } from "../../componets/ErroMessage";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuthentication();

  async function handleLogin() {
    if (email === "" || password === "") {
      return console.log('Preencha todos os campos')
    }
    const data = {
      email,
      password,
    }
    await login(data)
  }
  const navigation = useNavigation()
  return (
    <Container>
      <Title>Entrar</Title>
      <ContainerForm>

        <Input
          placeholder="Email@email.com"
          value={email}
          setValue={setEmail}
        />

        <Input
          placeholder="Digite sua senha"
          value={password}
          setValue={setPassword}
        />

        <ButtonNavigator onPress={() => navigation.navigate("Register")}>
          <TextNavigator>Crie sua conta </TextNavigator>
        </ButtonNavigator>

        {
          loading ?
            <ButtonLoading /> 
            :
            <Button
              handle={handleLogin}
              text="Entrar"
            />
        }
        {
          error && (
            <ErrorMessage error={error}/>
          )
        }
      </ContainerForm>

    </Container>
  )
}