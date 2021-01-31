
import React from 'react'
import { Text } from 'react-native'
import * as Linking from 'expo-linking'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Home'

const prefix = Linking.createURL('/')

export default function App() {
  const linking = {
    prefixes: [prefix],
  }

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Home />
    </NavigationContainer>
  )
}
