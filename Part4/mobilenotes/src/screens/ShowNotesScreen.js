import React from 'react';
import { Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const ShowNotesScreen = () => {
     /*
     const friends = [
          { content: 'Note 1', key:'1' }, //one way of adding key property
          { content: 'Note 2' , key:'2'},
          { content: 'Note 3', key:'3' },
          { content: 'Note 4' , key:'4'},
          { content: 'Note 5' ,key:'5'}
     ];
     */
     const notes = [
          { content: 'Note 1', id: 1 },
          { content: 'Note 2', id: 2 },
          { content: 'Note 3', id: 3 },
          { content: 'Note 4', id: 4 },
          { content: 'Note 5', id: 5 },
          { content: 'Note 6', id: 6 }
     ];
     return (
          <ScrollView>
               <FlatList
                    //horizontal //tells the list which way it is laid out and scrolled
                    //showsHorizontalScrollIndicator={false} //hides the scroll bar
                    keyExtractor={(note) => note.id} //another way to add key property
                    data={notes}
                    renderItem={({ item }) => {
                         return <Text style={styles.textStyle}>
                              {item.content}
                         </Text>;
                    }}
               />
          </ScrollView>
     );
};

const styles = StyleSheet.create({
     titleStyle: {
     },
     textStyle: {
          marginVertical: 10
     },
     buttonStyle: {
          
     }, 
     input: {
          
     }, 
     backgroundStyle: {
          
     }
});

export default ShowNotesScreen;