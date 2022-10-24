import React from "react";
import { Modal, TouchableHighlight, View, StyleSheet, Text } from "react-native";
import {WebView} from 'react-native-webview'

export default ({close, imagen, visible}) => {
  

  return(
    <Modal 
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <TouchableHighlight 
        onPress={close}
        >
          <Text style={styles.x}>X</Text>
        </TouchableHighlight>
        <WebView
        source={{ uri: imagen }}
        style={styles.webView}
        />
        <View></View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    alignItems: 'center' ,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  x: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  webView: {
    width: 300,
    marginVertical: 100,
  },

});