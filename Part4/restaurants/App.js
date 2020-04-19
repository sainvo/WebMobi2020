import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RestaurantList = () => {
  return (
    <View>
      <Text>Restaurants Screen</Text>
    </View>
  );
}

const MenuScreen = () => {
  return (
    <View>
      <Text>Menu Screen</Text>
    </View>
  );
}

const AdminScreen = () => {
  return (
    <View>
      <Text>Admin Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator(); //creates a navigator as a way for the app to transition bw screens

const App = () => {
  // initialRouteName sets the default screen for the navi stack
  //this is then linked with matching component
  //NavigationContainer manages the app state and links the navi to the app env
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Restaurants"> 
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="Menus" component={MenuScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;