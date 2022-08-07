import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Player = ({birdPosVertical}) => {
  return (
    <Image style = {{
        height: 30,
        width: 30,
        borderRadius: 30,
        top: birdPosVertical,
        left: 9
    }}
    source = {require("./assets/bird.png")}
    />
  )
}

export default Player

