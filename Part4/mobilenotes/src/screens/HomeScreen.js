import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/NoteContext';


const HomeScreen = ({ navigation }) => {
     //touchable has a fade response and can have multiple items inside it
     //const { state, deleteNote } = useContext(Context);
     const { state, deleteNote } = useContext(Context);
     
     return (
          
          <View style={styles.container}>
               <Text
                    style={styles.text}
                    accessibilityLabel="Welcome to MobileNotes App!"
               >
                    Welcome to MobileNotes App!</Text>
                    
               <SafeAreaView>
                    
                    <FlatList
                         contentContainerStyle={styles.container}
                         data={state}
                         keyExtractor={(item => item.id)}
                         renderItem={({ item }) => {
                              console.log('note id:', item.id, ', title: ', item.title);
                              return (
                                   <TouchableOpacity
                                        onPress={() => navigation.navigate('Read', { id: item.id })}
                                   >
                                        <View style={styles.row}>
                                             <Text style={styles.title}
                                                  accessibilityLabel="This is the title of the note on this row. If clicked, it will open the full note on a new window."
                                             >
                                                  {item.title}
                                             </Text>
                                             <TouchableOpacity onPress={() => deleteNote(item.id)}>
                                                  <FontAwesome
                                                       style={styles.icon} name='trash' color='black'
                                                       accessibilityLabel="This is a trashcan icon. It deletes the note on this row if clicked." /
                                                  >
                                             </TouchableOpacity>
                                        </View>
                                   </TouchableOpacity>
                              );
                         }}
                         
                    />
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
    
     container: {
          flexDirection: "column",
          backgroundColor: 'lightblue',
          margin: 10 
     },
     text: {
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10
     },
     row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: 'lightgreen'
     },
     title: {
          fontSize: 18,
     },
     icon: {
          fontSize: 24
     },
     plus: {
          marginRight: 15,
          borderWidth: 1,
          borderColor: 'green'
     }
});

export default HomeScreen;