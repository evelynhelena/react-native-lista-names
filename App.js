import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PeoplePage from "./src/Pages/PeoplePage";
import PeopleDatailes from "./src/Pages/PeopleDatailes";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuários" component={PeoplePage} options={style} />
        <Stack.Screen name="PeopleDatailes" component={PeopleDatailes} options={({route})=> {
          const titlePage = route.params.person.name.first
          return ({
            title: titlePage,
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle,
          });
        }} />
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
