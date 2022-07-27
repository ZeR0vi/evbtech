import react, {useEffect, useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native'
import Recado from '../../components/Recado'
import OneSignal from 'react-native-onesignal'
import {  ScrollView  } from 'react-native-gesture-handler'



// APP ID f0dc8c6c-51d3-45b7-bb38-0de58c8cc19a
export default function Notification() {




  return(
    <View style={styles.container}>

    

      <View style={styles.local}>
        <Text style={styles.a}>Fique por dentro das noticias da escola!</Text>


      </View>
      
    <View>

      <Text style={styles.b}>Ultimas Novidades</Text>
      <View>
        <Image style={{width: '100%', height: 250}} source={require('../../assents/not.png')} />
      </View>
   
      
    </View>

    <ScrollView vertical showsVerticalScrollIndicator={false}>

    


    <Recado
     /* cover={require('../../assents/me')}*/
      name="Atenção!"
      description="Aplicativo do Venceslau lançado!"
      onPress={() => {}}
      
      />


    <Recado
     /* cover={require('../../assents/me')}*/
      name="Atenção!"
      description="No proximo Sábado não havera aula"
      onPress={() => {}}
      />

    </ScrollView>
    </View>
)}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  a:{
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 100,
    fontSize: 20,
    textAlign: 'center',
    paddingRight: 10
  },
  local:{
    backgroundColor: '#5e17eb',
    width: 420,
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  b:{
    fontWeight: 'bold',
    fontSize: 30
  }
})