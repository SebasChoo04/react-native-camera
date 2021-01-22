import React, { useState, useEffect } from 'react';
import { Text, View, Animated, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const opacityValue = new Animated.Value(1);

   function goToCamera() {
    console.log("Started")

     Animated.timing(opacityValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate("Camera")
    }
    );

    console.log("Completed")
    // setButtonVisible(true)
  } 

  return(
    <View style={styles.container}>
      <AnimatedTouchable style={[styles.button, {opacity: opacityValue}]} onPress={() => goToCamera()}>
          <Text style={styles.buttonText}>
            Take My Picture!
          </Text>
      </AnimatedTouchable>
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
  view: {}
})