import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {

  const [hasPermission, setHasPermission] = useState(null); 
  const [back, setBack] = useState(true)

  const cameraRef = useRef(null)

  async function showCamera() {

    const {status} = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    if (hasPermission === false) {
      Alert.alert("Error: No access given")
    }
  }

  useEffect(() => {
    showCamera()
  }, [])

  function flip() {
    setBack(!back);
  }

  async function takePicture() {
    const photo = await cameraRef.current.takePictureAsync()
    // console.log(photo)
    console.log(photo)
    navigation.navigate("Photo", {image: photo})
  }

  return (
    <View style={{flex: 1}}>
      <Camera style={styles.camera} type={back ? Camera.Constants.Type.back : Camera.Constants.Type.front} ref={cameraRef}>
        <TouchableOpacity style={styles.button} onPress={() => flip()}>
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        <View style={styles.innerView}>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => takePicture()} style={styles.circleButton}/>
          </View>
        </View>
      </Camera>
    </View>
  )
}

  const styles = StyleSheet.create({
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      margin: 20,
    },
    button: {
      marginTop: 50,
      alignItems: 'center',
    },
    text: {
      fontSize: 36,
      color: 'white',
    },
    circle: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    circleButton: {
      width: 70,
      height: 70,
      bottom: 0,
      borderRadius: 50,
      backgroundColor: 'white',
    },
    buttonView: {
      alignSelf: 'center',
      flex: 1,
      alignItems: 'center'
    },
    innerView: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      padding: 20,
      justifyContent: 'space-between'
    }
  })