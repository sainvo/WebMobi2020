import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/NoteContext';
import NoteForm from '../components/NoteForm';

const EditNoteScreen = ({ navigation }) => {
     const id = navigation.getParam('id');
     const { state, editNote } = useContext(Context);
     const note = state.find((note) => note.id === id);

     return <NoteForm
          initValues={{ title: note.title, content: note.content }}
          onSubmit={(title, content) => {
               editNote(id, title, content, () => navigation.pop());
          }} />;
}

const styles = StyleSheet.create({
});

export default EditNoteScreen;