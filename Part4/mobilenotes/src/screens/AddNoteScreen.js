import React, { useState } from 'react';
//import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
//textInput has zero styling as default!!!!
//autoprops: for input you don't want OS to mess with aka autoformat
const TextScreen = () => {
     const [newNote, setNewNote] = useState('');

     return (
          <View>
               <Text>Write note:</Text>
               <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={newNote}
                    onChangeText={(newInput) =>
                         setNewNote(newInput)
                    }
               />
               {password.length < 5 ? <Text> Password has to be over 5 characters</Text> : null}
          </View>
     )
}
const styles = StyleSheet.create({
     input: {
          height: 30,
          margin: 20,
          borderColor: 'red',
          borderWidth: 1,
          fontSize: 20
     }
});

export default TextScreen;