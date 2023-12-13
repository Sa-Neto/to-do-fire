
import { ButtonNavigator, Container, ContainerForm, TextNavigator, Title } from "../Login/styles";
import { Input } from "../../componets/Input/Input";
import { Button } from "../../componets/Button";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonLoading } from "../../componets/ButtonLoading/ButtonLoading";
import { ErrorMessage } from "../../componets/ErroMessage";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null)
  const { createUser, error: AuthError, loading } = useAuthentication();
  
  const navigation = useNavigation();
  


  async function handleRegister() {

    if (email === "" || password === "" || displayName === "") {
      return setError('Preencha todos os campos')
    }
    const data = {
      email,
      password,
      displayName 
    }

    await createUser(data)

  }
  
  return (
    <Container>
      <Title>Register</Title>
      <ContainerForm>

        <Input
          placeholder="Digite o seu nome"
          value={displayName}
          setValue={setDisplayName}
        />

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
        <ButtonNavigator onPress={() => navigation.navigate("Login")}>
          <TextNavigator>Já possui conta clique aqui</TextNavigator>
        </ButtonNavigator>

        {
          loading ?
            <ButtonLoading />
            :
            <Button
              handle={() => handleRegister()}
              text="Cadastrar"
            />
        }


        {
          error && (
            <ErrorMessage error={error} />
          )
        }

        {
          AuthError && (
            <ErrorMessage error={AuthError} />
          )
        }

      </ContainerForm>

    </Container>
  )
}