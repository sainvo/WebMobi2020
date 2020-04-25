import React from 'react';
import { Text, StyleSheet, FlatList, View, ScrollView, Button } from 'react-native';


const notes = [
     { title: 'First', content: 'Note 1', id: '1' },
     { title: 'Second', content: 'Note 2', id: '2' },
     { title: 'Third', content: 'Note 3', id: '3' },
     { title: 'Fourth', content: 'Note 4', id: '4' },
     { title: 'Fifth', content: 'Note 5', id: '5' },
     { title: 'Sixth', content: 'Note 6', id: '6' }
]; 
const NoteList = () => {
     return (
          <FlatList horizontal
               //horizontal //tells the list which way it is laid out and scrolled
               //showsHorizontalScrollIndicator={false} //hides the scroll bar
               keyExtractor={(note) => note.id} //another way to add key property
               data={notes}
               renderItem={({ item }) => {
                    return <NoteDetail
                         title={item.title}
                         content={item.content}
                    />
               }}
          />
     )
}


const styles = StyleSheet.create({
     parentContainer: {
          flex:1,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 5,
          backgroundColor: 'navy',
          height: 'auto',
          width: 'auto'    
     }
   
});

export default ShowNotesScreen;