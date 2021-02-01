import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import axios from 'axios'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,

  },
  title: {
    fontSize: 18,
    fontWeight: '900',
  }
})

const MovieList = ({navigation}) => {
  const [movies, setMovies] = useState([])
  const [err, setErr] = useState(null)

  useEffect( () => {
    axios.get('http://my-json-server.typicode.com/serm-tape/movie-list/movies')
      .then( r => setMovies(r.data) )
      .catch( e => setErr(e.message))
  })
  return (
    <ScrollView style={styles.container}>
      <Text> status: {err || 'Connected'} </Text>
      {movies.map( m => (
        <TouchableHighlight
          key={m.id}
          style={styles.item}
          onPress={()=>navigation.navigate({name:'Detail', params: {id: m.id}})}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <View>
            <Text style={styles.title}> {m.rank}. {m.title} </Text>
            <Text> {m.id} </Text>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  )
}


export default MovieList
