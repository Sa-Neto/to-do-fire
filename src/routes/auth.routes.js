import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

function AuthRoutes(){
  const Stack = createNativeStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default AuthRoutes;