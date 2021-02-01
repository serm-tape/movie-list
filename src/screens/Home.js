import { StatusBar } from 'expo-status-bar'
import * as uuid from 'uuid'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../store/UserStore'
import { FlatList, StyleSheet, Text, View, Button, Linking } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
})

//'https://jsonplaceholder.typicode.com/users'

const Home = ({route}) => {
  const [status, setStatus] = useState("_")
  const { getCode } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <Text> Welcome to movie list app! </Text>
      <Button title='sign in with github' onPress={getCode} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home
