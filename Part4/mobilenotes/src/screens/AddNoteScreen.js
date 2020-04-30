import React, { useContext } from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Context } from '../context/NoteContext';
import NoteForm from '../components/NoteForm';
//import validate from '../components/FormValidation';

//textInput has zero styling as default!!!!
//autoprops: for input you don't want OS to mess with aka autoformat

const AddNoteScreen = ({ navigation }) => {
     //const state = useContext(Context);
     //console.log(state);
     const { addNote} = useContext(Context);
     return <NoteForm
          onSubmit={(title, content) => {
               addNote(title, content, () => navigation.navigate('Home'))
          }}
     />;
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