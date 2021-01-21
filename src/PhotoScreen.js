import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function PhotoScreen({ route }) {

  let position = new Animated.ValueXY({x: SCREEN_WIDTH / 2 - 150, y: -SCREEN_WIDTH})
  const { image } = route.params;

  useEffect(() => {
      Animated.spring(position, {
        toValue: {x: SCREEN_WIDTH / 2 - 150, y: SCREEN_HEIGHT / 2 - 150},
        duration: 1000,
        friction: 1,
        tension: 10,
        useNativeDriver: false
      }).start()
  }, [])

  return (
    <View style={styles.container}> 
      <Animated.Image style={[styles.image, position.getLayout()]} source={{uri: image.uri}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 300,
    height: 300,
  }
});