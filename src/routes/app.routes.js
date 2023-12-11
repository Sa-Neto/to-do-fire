import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../pages/Home";
import { AddTaks } from "../pages/AddTaks";


function AppRoutes(){
  const Stack = createNativeStackNavigator()

  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="AddTask" component={AddTaks} options={{headerShown:false}} />
    </Stack.Navigator>  
  )
}

export default AppRoutes