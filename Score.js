import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Score = ({score}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{score}</Text>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({
    container: {
        flex: 1,
        left: "45%",
        marginTop: "30%",
        position: "absolute",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Rockwell"
    }
})