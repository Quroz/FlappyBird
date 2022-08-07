import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Blocks = ({boxPosHorizontal, boxHeight,boxBottom, boxGap}) => {
  return (
  <View style = {{position: "absolute", bottom: boxBottom}}
  >
        <Image
            style = {{
               position: "absolute",
               bottom: 0,
               width: 40,
               backgroundColor: "green",
               height: boxHeight,
               left: boxPosHorizontal - 40
        }}
        source={require("./assets/pipe.png")}
        />
         <Image
             style = {{
               position: "absolute",
               bottom: boxHeight + boxGap,
               width: 40,
               backgroundColor: "green",
               height: boxHeight,
               left: boxPosHorizontal - 40
        }}
         source={require("./assets/pipe.png")}
        />
   </View>
  )
}

export default Blocks

