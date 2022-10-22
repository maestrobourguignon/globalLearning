import React, {useCallback} from "react";
import { Button, Modal, View, StyleSheet, Text, Alert, Linking } from "react-native";



export default ({visible, close, url}) => {
  
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`No se puede abrir esta URL: ${url}`);
    }
  }, [url])

  return(
      <Modal 
      animationType="slide"
      transparent={true}
      visible={visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <View>
              <Text>Si aceptas vamos a abrir tu navegador para mostrarte la imagen, ¿Estás seguro?</Text>
            </View>
            <View style={styles.buttonView}>
              <Button title="Abrir Imagen" onPress={handlePress}/>
              <View style={styles.space} />
              <Button title="Cerrar Modal" onPress={close}/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalSubContainer: {
    width: '70%',
    height: '18%',
    backgroundColor: '#fff',
    alignItems: 'center' ,
    justifyContent: 'space-evenly' ,
    borderRadius:6,
  },
  buttonView: {
    flexDirection: 'row',
  },
  space: {
    marginHorizontal: 5
  },
  txtView: {
    fontSize: 15,
    fontWeight: '400'
  }
})