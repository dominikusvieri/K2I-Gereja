import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import LoginScreen from '../../screens/Login/LoginScreen'
import RegisterScreen from '../../screens/Register/RegisterScreen'
import BottomNavigation from './BottomNavigation'
import DetailNewsScreen from '../../screens/HomeScreen/DetailNewsScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{headerShown:false}}/>
            <Stack.Screen name='DetailNews' component={DetailNewsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation