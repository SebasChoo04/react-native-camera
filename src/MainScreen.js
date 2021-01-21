import React, { useState } from 'react';
import { Text, View, Animated, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const startValue = new Animated.Value(1);
  const [buttonVisible, setButtonVisible] = useState(true)

   function goToCamera() {
    setButtonVisible(false)
    console.log("Started")

     Animated.timing(startValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate("Camera")

      Animated.timing(startValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start()
    });

    console.log("Completed")
    setButtonVisible(true)
    
  }

  return(
    <View style={styles.container}>
      {(buttonVisible ? (<AnimatedTouchable style={[styles.button, {opacity: startValue}]} onPress={() => goToCamera()}>
          <Text style={styles.buttonText}>
            Take My Picture!
          </Text>
      </AnimatedTouchable>) : <View/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 30, 
    height: 70,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    marginLeft: 20, 
    marginRight: 20,
   
  },
})