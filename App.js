import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PeoplePage from "./src/Pages/PeoplePage";
import Tela2 from "./src/Pages/Tela2";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuários" component={PeoplePage} options={style} />
        <Stack.Screen name="Tela2" component={Tela2} options={style} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = {
  headerStyle: {
    backgroundColor: "#3db7d9",
  },
  headerTitleStyle: {
    color: "#fff",
    fontSize: 25,
    textAlign:'center'
  },
};

export default App;
