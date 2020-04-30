
import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView, View,  TouchableOpacity } from 'react-native';

import { Context } from '../context/NoteContext';
import { FontAwesome } from '@expo/vector-icons';

const NoteList = ({navigation}) => {
     const { state, deleteNote } = useContext(Context);
     const data = [...state];
     return (
          data.map((note) =>
               <View key={note.id}>
                    <TouchableOpacity
                         
                         onPress={() => navigation.navigate('Read', { id: note.id })}
               >
                    
                    
                         <View style={styles.row}>
                              <Text style={styles.title}
                                   accessibilityLabel="This is the title of the note on this row. If clicked, it will open the full note on a new window."
                              >
                                   {note.title}
                              </Text>
                              <TouchableOpacity onPress={() => deleteNote(note.id)}>
                                   <FontAwesome
                                        style={styles.icon} name='trash' color='black'
                                        accessibilityLabel="This is a trashcan icon. It deletes the note on this row if clicked." /
                                   >
                              </TouchableOpacity>
                         </View>
                    
                   
               </TouchableOpacity>
               </View >

          ));

          
};

const styles = StyleSheet.create({
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
     }
});

export default NoteList;
