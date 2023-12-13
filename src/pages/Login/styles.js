import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #323232;
  flex: 1;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  margin-left: 10%;
  margin-top: 24px;
`
export const ContainerForm = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`
export const ButtonNavigator = styled.TouchableOpacity`
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`
export const TextNavigator = styled.Text`
  color: rgba(255,255,255,.5) ;
`;