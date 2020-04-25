import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteDetail = ({ title, content}) => {
     //console.log(props)
     return <View style={styles.parentStyle}>
               <Text style={styles.titleStyle}>{title}</Text>
               <View style={styles.contentStyle}>
                    <Text >{content}</Text>
               </View>
     </View>
}

const styles = StyleSheet.create({
     parentStyle: {
          borderWidth: 3,
          borderColor: 'blue',
          backgroundColor: 'lightblue',
          padding: 10

     },
     titleStyle: {
          fontSize: 20, 
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          padding: 5 
     },
     contentStyle: {
          fontSize: 14,
          flex: 0.9,
          padding: 10
          
          
     }
});

export default NoteDetail;