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
  StatusBar, 
  Switch,
  RefreshControl,
} from 'react-native';
import Pokemon from './components/pokemon';
import pokemonList from './components/pokemonList';
import Modal from './components/modal';



export default function App() {
  const [input, setInput] =useState(true)
  const toggleSwitch = () => 
  setInput(!input)
  const [busqueda, setBusqueda] = useState('')
  const [confirmacion, setConfirmacion] = useState('')
  const [oculto, setOculto] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [imgURL, setImgURL] = useState('')
  
  const asyncSearch = () => {
    setOculto()
    setTimeout(() => {
      setOculto(false)
      setConfirmacion(busqueda.toLowerCase())
    }, 2000);
  }

  // a handleOpen le pasamos la prop de imagen que contiene el url que le dimos con la misma prop 
  // en el componente pokemon, y luego seteamos la const imgURL con el valor de la prop
  const handleOpen = (imagen) => {
    setImgURL(imagen)
    setModalVisible(true)
    console.log(imgURL)
    
  }

  const handleClose = () => {
    setModalVisible(false)
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
          open={handleOpen}
        />}
        ListEmptyComponent={
          <View style={styles.listaVacia}>
            <Text style={styles.listaVaciaTxt}>No se encontró el Pokémon con el nombre:</Text>
            <Text style={styles.listaVaciaTxtNegrita}>{confirmacion}</Text>
          </View>
        }
      />
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
      <Modal
        visible = {modalVisible}
        close = {handleClose}
        url = {imgURL}
        // como ya guardamos la URL en esta constante solo se lo asociamos a la prop url
        ></Modal>
      <StatusBar
      backgroundColor="#c90a1d"
      barStyle={'light-content'}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 10
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