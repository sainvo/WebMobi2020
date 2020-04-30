import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/NoteContext';
import HomeScreen from './src/screens/HomeScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import ReadNoteScreen from './src/screens/ReadNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';


const navigator = createStackNavigator(
     {
          Home: HomeScreen,
          Read: ReadNoteScreen,
          Add: AddNoteScreen,
          Edit: EditNoteScreen

     },
     {
          initialRouteName: "Home",
          defaultNavigationOptions: {
               title: "Mobile Notes"
          }
     }
);

const App = createAppContainer(navigator);
export default() => {
     return <Provider>
          <App />
     </Provider>
};