import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from '@react-navigation/container'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import ShowNotesScreen from './src/screens/ShowNotesScreen';

const navigator = createStackNavigator(
     {
          Home: HomeScreen,
          List: ShowNotesScreen,
          Add: AddNoteScreen,
     },
     {
          initialRouteName: "Home",
          defaultNavigationOptions: {
               title: "App", 
               style: styles.container
          }
     }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);