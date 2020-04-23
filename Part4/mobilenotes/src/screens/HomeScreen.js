import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
     //touchable has a fade response and can have multiple items inside it
     //console.log(props.navigation);
     return <View>
          <Text style={styles.text}>Welcome to MobileNotes App!</Text>
          <Button
               title="View notes"
               onPress={() => navigation.navigate('List')} //this is same as below
          />
          <Button
               title="Add new Note"
               onPress={() => navigation.navigate('NewNote')}
          />
     </View>
};

const styles = StyleSheet.create({
     text: {
          fontSize: 30
     }
});

export default HomeScreen;