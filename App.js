import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Player from './Player';
import Blocks from './Blocks';
import StartScreen from './StartScreen';
import Score from './Score';


export default function App() {

  const [gameOn, setGameOn] = useState(false)  //sätt till false

  const [birdPosVertical, setBirdPosVertical] = useState((Dimensions.get("screen").height)/2)
  const [boxPosHorizontal, setBoxPosHorizontal] = useState((Dimensions.get("screen").width) + 500)
  const [boxHeight, setBoxHeight] = useState(200)
  const [boxBottom, setBoxBottom] = useState(100)
  const [boxGap, setBoxGap] = useState(80)
  const [score, setScore] = useState(0)

  let birdTimer;
  let boxTimer;
  let scoreTimer;
  
  useEffect(() => {
    start()
  }, [])

  function start(){
    setGameOn(false)   //sätt till false
    setBirdPosVertical((Dimensions.get("screen").height)/2)
    setBoxPosHorizontal(Dimensions.get("screen").width + 500)
    setScore(0)
    clearInterval(scoreTimer)
    clearInterval(birdTimer)
    clearInterval(boxTimer)
  }

  useEffect(() => {
   birdTimer = setInterval(() => {
     if(birdPosVertical < Dimensions.get("screen").height - 40){ 
       setBirdPosVertical(birdPosVertical + 3)
       if(birdPosVertical < 0)
          setBirdPosVertical(0)
      }
     else
        setBirdPosVertical(Dimensions.get("screen").height -40)
    }, 20)
    return () => clearInterval(birdTimer)
  },[birdPosVertical])

  useEffect(() => {
    boxTimer = setInterval(() => {
        if(boxPosHorizontal > 0){ 
           setBoxPosHorizontal(boxPosHorizontal - 5)
           //if(boxPosHorizontal-40 === 14 && birdPosVertical < (boxHeight + boxBottom + boxGap)) console.warn("TJdsfd")
        }

        else{
          setBoxPosHorizontal(Dimensions.get("screen").width)
          setBoxHeight(Math.floor(Math.random() * 299) + 350)
          setBoxBottom(Math.floor(Math.random() * (80 - 0 + 1)) + 0)
          setBoxGap(Math.floor(Math.random() * (100 - 80 + 1)) + 80) 
        }

    }, 20)
    return () => clearInterval(boxTimer)
  }, [boxPosHorizontal])

  useEffect(() => {
    
       scoreTimer = setInterval(() => {
        setScore(score + 10)
    }, 500)
    return () => clearInterval(scoreTimer)
    
  }, [score])


  //Collision checker
  useEffect(() => {
      const gameOverTimer = setInterval(() => {
      if(birdPosVertical === Dimensions.get("screen").height - 40){
         start()
        }
    }, 20)
    return () => clearInterval(gameOverTimer)
  }, [birdPosVertical, boxPosHorizontal])

  function birdJump(){
    clearInterval(birdTimer)
    setBirdPosVertical(birdPosVertical - 40)
  }

  return (







  <TouchableWithoutFeedback onPress={birdJump} style = {styles.container}>
     <ImageBackground
   source={require("./assets/bakgrund.png")}
   style = {{width: "100%", height: "100%"}}
   resizeMode='cover'
   >
     {gameOn ? (
         <>
         <Score
         score = {score}
         />
         <Player
          birdPosVertical = {birdPosVertical}
        />
        <Blocks
          boxPosHorizontal = {boxPosHorizontal}
          boxHeight = {boxHeight}
          boxBottom = {boxBottom}
          boxGap = {boxGap}
        />
        </>
     ): (
        <StartScreen gameOn = {gameOn} setGameOn = {setGameOn}/>
     )}

      </ImageBackground>
     </TouchableWithoutFeedback> 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
