//import { NavigationContainer } from 'react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';


const navigator = createStackNavigator(
     {
          Home: HomeScreen,
          Add: AddNoteScreen
     },
     {
          initialRouteName: "Home",
          defaultNavigationOptions: {
               title: "Mobile Notes"
          }
     }
);

export default createAppContainer(navigator);