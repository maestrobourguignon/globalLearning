import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  FlatList,
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ActivityIndicator, 
  Button, 
  Switch,
  RefreshControl,
  Animated
} from 'react-native';
import Pokemon from './components/pokemon';
import pokemonList from './components/pokemonList';



export default function App() {
  const [input, setInput] =useState(true)
  const toggleSwitch = () => 
  setInput(!input)
  const [busqueda, setBusqueda] = useState('')
  const [confirmacion, setConfirmacion] = useState('')
  const [oculto, setOculto] = useState(false)
  const asyncSearch = () => {
    setOculto(true)
    setTimeout(() => {
      setOculto(false)
      setConfirmacion(busqueda.toLowerCase())
    }, 2000);
  }
  const animacion = () => {
    height = Animated.Value(80)
  }

  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/pokeapi_256.png')} />
      <View style={styles.containerSwitch}>
        <Text>Desactivar Busqueda</Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={!input}
        />
      </View>      
      <View style={styles.buscadorView}>
        <TextInput 
          placeholder='Buscar Pokemon'
          style={styles.buscador}
          onChangeText={busqueda => setBusqueda(busqueda)}
          editable={input}
          backgroundColor={input ? '#fff' : 'gray' }
        />
        <View style={styles.btnView}>
          {!oculto ? 
          <Button 
          title='Buscar'
          onPress={asyncSearch}
          disabled = {!input}
          />
          :
          <ActivityIndicator 
          size={'large'}
          color='blue'
          />
          }
        </View>
      </View>
      <FlatList 
      refreshControl={
        input ?
        <RefreshControl
          refreshing={oculto}
          onRefresh={asyncSearch}
        />
        :
        null
      }
      style={styles.list}
      data={pokemonList.filter(item => item.name.includes(confirmacion))}
      keyExtractor={x => String(x.name)}
        renderItem={({item}) => <Pokemon 
          imagen={item.url}
          title={item.name}
        />}
        ListEmptyComponent={
          <View style={styles.listaVacia}>
            <Text style={styles.listaVaciaTxt}>No se encontró el Pokémon con el nombre:</Text>
            <Text style={styles.listaVaciaTxtNegrita}>{confirmacion}</Text>
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
  btnView: {
    marginHorizontal: 5,
  },
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
    marginTop:10,
    marginBottom:10,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  },
  containerSwitch:{
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }

});
