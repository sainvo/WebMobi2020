import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/NoteContext';
import NoteList from "../components/NoteList";


const HomeScreen = () => {
     //touchable has a fade response and can have multiple items inside it
     //const { state, deleteNote } = useContext(Context);
    
     
     return (
          
          <View style={styles.viewParent}>
               <Text
                    style={styles.text}
                    accessibilityLabel="Welcome to MobileNotes App!"
               >
                    Welcome to MobileNotes App!</Text>
                    
               <SafeAreaView > 
                    <ScrollView contentContainerStyle={styles.container}>
                         <NoteList />
                    </ScrollView>
               </SafeAreaView>
          </View>
     )
};
HomeScreen.navigationOptions = ({ navigation }) => {
     return {
          headerRight: () =>
               <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <View style={styles.plus}>
                         <Feather name="plus" color='green' size={34}
                              accessibilityLabel="This is a plus icon. If clicked, it will open a new view for creating a new note."
                         />
                    </View>
               </TouchableOpacity>
     }
};

const styles = StyleSheet.create({
     viewParent: {
          backgroundColor: 'green', flex:1
    },
     container: {
          backgroundColor: 'lightblue',
          margin: 10
     },
     text: {
          fontSize: 20,
          fontWeight:'bold',
          color: 'white',
          textAlign: 'center',
          marginTop: 10
     },
     
     title: {
          fontSize: 18,
     },
     plus: {
          marginRight: 15,
          borderWidth: 1,
          borderColor: 'green'
     }
});

export default HomeScreen;