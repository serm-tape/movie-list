import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import axios from 'axios'

const MovieList = ({navigation}) => {
  const [movies, setMovies] = useState([])

  useEffect( () => {
    axios.get('http://my-json-server.typicode.com/serm-tape/movie-list/movies')
      .then( r => setMovies(r.data) )
  })
  return (
    <ScrollView>
      {movies.map( m => (
        <TouchableHighlight onPress={()=>navigation.navigate({name:'Detail', params: {id: m.id}})}>
          <View>
            <Text> {m.title} </Text>
            <Text> {m.rank} </Text>
            <Text> {m.id} </Text>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  )
}


export default MovieList
