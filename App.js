
import React from 'react'
import { Text } from 'react-native'
import * as Linking from 'expo-linking'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { UserStore } from './src/store/UserStore'
import Home from './src/screens/Home'
import MovieList from './src/screens/MovieList'
import AuthCallback from './src/screens/AuthCallback'
import MovieDetail from './src/screens/MovieDetail'

const prefix = Linking.createURL('movie-list')
const Stack = createStackNavigator();

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: '/home',
        List: '/list',
        Auth: '/auth/callback',
        Detail: '/movies/:id'
      }
    }
  }

  console.log(linking)

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <UserStore>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='List' component={MovieList} />
          <Stack.Screen name='Auth' component={AuthCallback} />
          <Stack.Screen name='Detail' component={MovieDetail} />
        </Stack.Navigator>
      </UserStore>
    </NavigationContainer>
  )
}
