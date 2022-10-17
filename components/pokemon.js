import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default ({title, imagen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circulito}>
        <Image style={styles.img} source={{uri: imagen}}/>
      </View>
      <Text style={styles.txt}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 15,
    flexDirection: "row",
    width:'100%',
    marginHorizontal:10,
  },
  txt: {
    fontSize: 18,
    paddingLeft:20,
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