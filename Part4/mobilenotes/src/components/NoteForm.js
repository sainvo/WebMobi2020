import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Context } from '../context/NoteContext';


const NoteForm = ({ onSubmit, initValues}) => {
     const [title, setTitle] = useState(initValues.title);
     const [content, setContent] = useState(initValues.content);
     //const notes = useContext(Context)
     
     return (
          <View>
               <Text style={styles.label}>Enter title:</Text>
               <TextInput
                    style={styles.title}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
               />
               <Text style={styles.label}>Enter content:</Text>
               <TextInput
                    multiline={true}
                    style={styles.content}
                    value={content}
                    onChangeText={(text) => setContent(text)}
               />
               <View style={styles.parentStyle}>
                    <View >
                         <Button title="Clear note"
                              onPress={() => {
                                  setContent('');
                                   setTitle('');
                              }}
                              color='red'
                              accessibilityLabel= 'This button deletes the current text in the title and content fields'
                         />
                    </View >
                    <View >
                         <Button
                              title="Submit note"
                              onPress={ () => onSubmit(title, content)  }
                              color='green'
                              accessibilityLabel = 'This button saves your note'
                         />
                    </View>
                    
               </View>
          </View>
     )
};
//default values to handle non-existing initValue prop
//automatic
NoteForm.defaultProps = {
     initValues: {
          title: '',
          content: ''
     }
};

const styles = StyleSheet.create({
     title: {
          fontSize: 18,
          borderWidth: 1,
          borderColor: 'black',
          padding: 5,
          margin: 5
     },
     label: {
          fontSize: 20,
          marginBottom: 5,
          marginLeft: 5
     },
     content: {
          textAlignVertical: 'top',
          height: 300,
          margin: 5,
          borderColor: 'red',
          borderWidth: 1,
          fontSize: 20
     },
     parentStyle: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10
     }
});

export default NoteForm;