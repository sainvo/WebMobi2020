import React, { useState } from 'react';
//import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
//textInput has zero styling as default!!!!
//autoprops: for input you don't want OS to mess with aka autoformat

const AddNoteScreen = () => {
     const [newNote, setNewNote] = useState('');
     return (
          <View>
               <Text>Write note:</Text>
               <TextInput
                    multiline = {true}
                    style={styles.input}
                    autoCapitalize='sentences'
                    autoCorrect={true}
                    value={newNote}
                    onChangeText={(newInput) =>
                         setNewNote(newInput)
                    }
               />
               {newNote.length < 5 ?
                    <Text> Note has no content yet.</Text> : null
               }
               <View style = {styles.parentStyle}>
                    <View style={styles.buttonStyle}>
                         <Button title="Save note"
                              onPress={() => {
                                   
                              }}
                         />
                    </View>
                    <View style={styles.buttonStyle}>
                         <Button title="Clear note"
                              onPress={() => {
                                   
                              }}
                         />
                    </View >
               </View>
          </View>
     );
};
          
const styles = StyleSheet.create({
     parentStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20
     },
     input: {
          textAlignVertical:'top',
          height: 300,
          margin: 20,
          borderColor: 'red',
          borderWidth: 1,
          fontSize: 20
     },
     buttonStyle: {
          padding: 5,
          borderColor: 'black',
          borderWidth:2
     }
});

export default AddNoteScreen;