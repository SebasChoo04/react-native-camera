import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/MainScreen';
import CameraScreen from './src/CameraScreen';
import PhotoScreen from './src/PhotoScreen'


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={true}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Camera" component={CameraScreen}/>
        <Stack.Screen name="Photo" component={PhotoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
