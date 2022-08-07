import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const StartScreen = ({gameOn, setGameOn, score}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Flappy Bird</Text>
      <TouchableOpacity style = {styles.button} onPress={() => setGameOn(!gameOn)}>
          <Text style = {styles.buttonText}>Play</Text>
         
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: "Rockwell"
    },
    button: {
        width: "40%",
        height: "5%",
        backgroundColor: "#fcffa4",
        marginTop: 10,
        borderRadius: "50%",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
      fontSize: 30,
      fontWeight: "bold"
    }
})