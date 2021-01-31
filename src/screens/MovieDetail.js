import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const INIT_MOVIE_STATE = {
  id: '',
  title: '',
  rank: '',
}

const MovieDetail = ({route}) => {
  const [detail, setDetail] = useState(INIT_MOVIE_STATE)
  useEffect( () => {
    axios.get(`http://my-json-server.typicode.com/serm-tape/movie-list/movies/${route.params.id}`)
      .then( r => setDetail(r.data))
      .catch( err => console.log(err.message))
  }, [])

  return (
    <View>
      <Text> {detail.title} </Text>
      <Text> {detail.rank} </Text>
      <Text> {detail.id} </Text>
    </View>
  )
}

export default MovieDetail
