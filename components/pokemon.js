import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";


export default ({title, imagen, open}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.pkmnContainer}>
      <View style={styles.circulito}>
        <Image style={styles.img} source={{uri: imagen}}/>
      </View>
      <Text style={styles.txt}>{title}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Ver Imagen" onPress={() => open(imagen)}/>
        {/* para pasarle al modal el url, se le pasa la funcion flecha open(que se le dara el valor de handleOpen) y le pasamos pa prop imagen(que es el nombre que le dimos al url) */}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between' ,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 15,
    flexDirection: "row",
    width:'100%',
    marginHorizontal:10,
  },
  pkmnContainer: {
    alignItems: 'center',
    flexDirection: "row",
    marginHorizontal:5,

  },
  btnContainer:{
    marginHorizontal:25,
  },
  txt: {
    fontSize: 18,
    paddingLeft:20,
    textTransform: 'capitalize'
  },
  img: {
    height: 40,
    width: 40,
  },
  circulito: {
    height: 50,
    width: 50,
    borderRadius:50,
    backgroundColor: 'yellow',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'black',
    
  }
})