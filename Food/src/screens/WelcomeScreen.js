import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WelcomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "orange"
    },
  
    text:{
      fontSize:25,
      fontWeight:'bold'
    },

    space: {
        marginVertical: 10,
    },
  
  })