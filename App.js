import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View, ScrollView} from 'react-native';

const App = () => {

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
    },
    {
      id: 5,
      name: 'Titanic',
      director: 'James Cameron',
      url: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    },
    {
      id: 6,
      name: 'Harry Potter y la Piedra Filosofal',
      director: 'Chris Columbus',
      url: 'https://musicart.xboxlive.com/7/8ee05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    },
    {
      id: 7,
      name: 'El Señor de los Anillos: La Comunidad del Anillo',
      director: 'Peter Jackson',
      url: 'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg',
    },
    {
      id: 8,
      name: 'El Rey León',
      director: 'Disney',
      url: 'https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41',
    },
    {
      id: 9,
      name: 'El Padrino',
      director: 'Francis Ford Coppola',
      url: 'https://es.web.img3.acsta.net/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27',
    },
    {
      id: 10,
      name: 'Men in Black',
      director: 'Barry Sonnenfeld',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Men_in_Black_Poster.jpg/220px-Men_in_Black_Poster.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to My Movies App! 🍿</Text>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={5}
        renderItem={({item}) => (
         <ScrollView horizontal={true}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
          />
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textDirector}>{item.director}</Text></View></ScrollView> 
        )}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 200,
    height: 400, 
    marginTop: 15, 
    marginLeft: 0,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: 'white',
  },
  textDirector:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textName:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: 200,
    textAlign: 'center',
  },
  flatListContainer:{
    flex: 1,
    marginTop: 15,
    marginBottom: 15, 
  },
  itemContainer: {
    alignItems: 'center', // Centra los elementos horizontalmente
    marginRight: 5, // Añade un margen a la derecha para separar los ítems
    
  },
});

export default App;