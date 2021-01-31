import React, {createContext, useReducer, useEffect} from 'react'
import { Linking } from 'react-native'
import * as uuid from 'uuid'
import axios from 'axios'

export const UserContext = createContext({})

const initialUserState = {
  access_token: null,
  state: uuid.v4()
}
const CLIENT_ID = '3c07a7ec22e54122d952'
const CLIENT_SECRET = 'd5b80bed204b79c756f2f44dca940bf4ae4d706a' //TODO: move this to https://docs.expo.io/versions/latest/sdk/securestore/ later

const userReducer = (state, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'SIGN_IN':
      return {access_token: payload.access_token, state: state.state}
    default: return {access_token: null, state: state.state}
  }
}

export const UserStore = ({children}) => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    initialUserState
  )

  const getCode = (state) => {
    Linking.openURL(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=${state}`)
  }

  const getToken = (code, status) => {
    const body = {
      code: code,
      state: status,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }

    return axios
      .post(`https://github.com/login/oauth/access_token`, body)
      .then( (res) => userDispatch({type: 'SIGN_IN', payload: {access_token: res.data.access_token}}))
      .catch( e => console.log(e.message))
  }

  return (
    <UserContext.Provider value={{user: userState, getCode, getToken}}>
      {children}
    </UserContext.Provider>
  )
}
