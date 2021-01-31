import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../store/UserStore'

const AuthCallback = ({route, navigation}) => {
  const { user, getToken } = useContext(UserContext)

  useEffect( () => {
    if (route.params?.code) {
      getToken(route.params.code, user.state)
        .then( () => navigation.navigate('List'))
    }
  }, [route.param])
  return (
    <View>
      <Text> Signing in ... </Text>
    </View>
  )
}


export default AuthCallback
