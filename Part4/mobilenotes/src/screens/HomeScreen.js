import React from "react";
import { Text, StyleSheet, View, Button, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import NoteDetail from '../components/NoteDetail';
import Constants from 'expo-constants';

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
          <ScrollView style={styles.container}>
               <FlatList 
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
          </ScrollView>
     )
}

const HomeScreen = ({ navigation }) => {
     //touchable has a fade response and can have multiple items inside it
     //console.log(props.navigation);
     return <View style={styles.viewParent}>
          <Text style={styles.text}>Welcome to MobileNotes App!</Text>
          <View style = {styles.buttonParent}>
               <Button
                    title="Add new Note"
                    onPress={() => navigation.navigate('Add')}
                    color='red'
                    accessibilityLabel = "Go to the screen where you can create and add a new note"
               />
          </View>
          <SafeAreaView style={styles.viewParent}>
                    <NoteList />
          </SafeAreaView>
     </View>
};

const styles = StyleSheet.create({
     viewParent: {
          flexDirection: 'column',
          alignItems: 'stretch'
     },
     container: {
          flexDirection: "column",
          backgroundColor: 'green',
          margin: 5
     },
     buttonParent: {
          padding: 20,
          flexDirection: "column",
          alignItems: "center",
          margin: 5,
          borderColor: 'red',
          borderWidth: 1
     },
     button: {
          padding: 5,
          margin: 5,
          borderColor: 'red',
          borderWidth: 4
     },
     text: {
          fontSize: 20,
          textAlign: 'center'
     }
});

export default HomeScreen;