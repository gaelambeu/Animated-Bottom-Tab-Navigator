import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>

      <View style={styles.imgbox}>
        <View style={styles.imgsmallbox}>
          <Image src="" />
        </View>
      </View>      
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

    imgbox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      borderRadius: 999, 
      width: 100, 
      height: 100, 
    },

    imgsmallbox:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      borderRadius: 999, 
      width: 100, 
      height: 100, 
    }
  
  })