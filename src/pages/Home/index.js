import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { AreaContent, Container, Content, TextName } from "./styles";
import { Button } from "../../componets/Button";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { user } = useContext(AuthContext)
  const { exit } = useAuthentication();
  const navigation = useNavigation();
  console.log(user)
  function handleNewTaks() {
    navigation.navigate("AddTask")
  }
  return (
    <Container>
      <AreaContent>
        <Content>
          <TextName>{user && user.displayName}</TextName>
          <TouchableOpacity onPress={exit}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <Text style={{ color: "#fff" }}>Você não tem nenhuma tarefa no momento</Text>
        </Content>
        <Button
          text="Nova tarefa"
          handle={handleNewTaks}
        />
      </AreaContent>

    </Container>
  )
}

