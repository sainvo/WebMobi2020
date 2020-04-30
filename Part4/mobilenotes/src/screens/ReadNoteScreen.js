import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Context } from '../context/NoteContext';
import { FontAwesome } from '@expo/vector-icons';
import NoteDetail from '../components/NoteDetail';

const ReadNoteScreen = ({navigation}) => {
     const { state } = useContext(Context);
     const note = state.find((note) => note.id === navigation.getParam('id'))
     return (
          <SafeAreaView style={styles.parentStyle}>
               <NoteDetail title={note.title} content={note.content} />
          </SafeAreaView>
     )
}
ReadNoteScreen.navigationOptions = ({ navigation }) => {
     return {
          headerRight: () =>
               <TouchableOpacity onPress={() =>
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
               }
               >
                    <FontAwesome name="pencil" size={30} />
               </TouchableOpacity>
     }
}
const styles = StyleSheet.create({
     parentStyle: {
          alignItems: 'stretch',
          margin: 5
     },
     title: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10
         
     },
     content: {
          fontSize: 16,
          alignSelf: 'stretch',
          margin: 10,
          padding: 5
     }

});

export default ReadNoteScreen;