import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NoteDetail = ({ title, content }) => {
     //console.log(props)
     return (<View>
          <View style={{backgroundColor: 'lightblue' }}>
               <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <ScrollView style={{ backgroundColor: 'skyblue' }}>
               <Text style={styles.contentStyle}>{content}</Text>
          </ScrollView>
     </View>
     );
};

const styles = StyleSheet.create({
     parentStyle: {
          padding: 5,
          margin:5

     },
     titleStyle: {
          fontSize: 20, 
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          padding: 5
        
     },
     contentStyle: {
          fontSize: 14,
          padding: 10
     }
});

export default NoteDetail;