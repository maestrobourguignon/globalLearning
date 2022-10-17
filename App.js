import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Pokemon from './components/pokemon';
import pokemonList from './components/pokemonList';


export default function App() {
  const [busqueda, setBusqueda] = useState('')
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/pokeapi_256.png')} />
      <View style={styles.buscadorView}>
        <TextInput 
          placeholder='Buscar Pokemon'
          style={styles.buscador}
          onChangeText={busqueda => setBusqueda(busqueda.toLowerCase())}
        />
      </View>
      <FlatList 
      style={styles.list}
      data={pokemonList.filter(item => item.name.includes(busqueda))}
      keyExtractor={x => String(x.name)}
        renderItem={({item}) => <Pokemon 
          imagen={item.url}
          title={item.name}
        />}
        ListEmptyComponent={
          <View style={styles.listaVacia}>
            <Text style={styles.listaVaciaTxt}>No se encontró el Pokémon con el nombre:</Text>
            <Text style={styles.listaVaciaTxtNegrita}>{busqueda}</Text>
          </View>
        }
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  list: {
    width: '100%',
    borderBottomWidth:1,
    borderBottomColor: 'black',
  },
  // logo: {
  //   padding:40,
  // }
  buscador: {
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    width:'70%',
    paddingLeft:10
  },
  buscadorView:{
    width:'100%',
    marginTop:30,
    marginBottom:10,
    justifyContent:'center',
    alignItems: 'center',
  },
  listaVacia:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  listaVaciaTxt:{
    fontSize:15,
  },
  listaVaciaTxtNegrita:{
    fontSize:25,
    fontWeight:'bold',
  }
});
