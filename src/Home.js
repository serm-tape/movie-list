import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
const CLIENT_ID = '3c07a7ec22e54122d952'
const CLIENT_SECRET = 'd5b80bed204b79c756f2f44dca940bf4ae4d706a' //move this to https://docs.expo.io/versions/latest/sdk/securestore/ later
//'https://jsonplaceholder.typicode.com/users'

const Home = () => {
  const [status, setStatus] = useState("_")
  
  const login = () => {
    WebBrowser
      .openAuthSessionAsync(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`)
      .then( (e) => setStatus(JSON.stringify(e)))
  }
  return (
    <View style={styles.container}>
      <Text> {status} </Text>
      <Button title='Sign in' onPress={login} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home
