import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { ScrollView, ReactButton, TouchableOpacity } from 'react-native-gesture-handler'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Button } from 'react-native-web';
import { Feather } from '@expo/vector-icons';

export default function Horarioano3() {




  return (

    
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>  
      <View style={styles.horariosseparados}>
        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>1º Jade</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/jade.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>1º Bronze</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/bronze.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>1º Turquesa</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/turquesa.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>1º Esmeralda</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/esmeralda.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>2º Ouro</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/ouro.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>2º Lazuli</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/lazuli.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>3º Agata</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/agata.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>3º Cristal</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/cristal.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>3º Rubi</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/rubi.png')}/>

        
      </View>



      <View>
        <Text style={styles.download}>Quer Baixar o Horario completo?</Text>
        
            <TouchableOpacity
            onPress={Link}
            
            >
              <Feather
              style={styles.botaodownload}
              name='download' size={25} color="#000"
              />
            </TouchableOpacity>
          

      </View>

      </ScrollView>
      </View>

    
  );

  function Link(){
    Linking.openURL('https://i.ibb.co/48s2fTw/horariosdo1anoensinomedio.jpg')
  }



}


/*https://i.ibb.co/48s2fTw/horariosdo1anoensinomedio.jpg*/

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  download:{
    fontWeight: 'bold',
  }

})