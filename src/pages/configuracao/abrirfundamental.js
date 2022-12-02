import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Fundamentalensio from '../../components/ensinofundamental';

export default function Abrirfundamental() {

  const navigation = useNavigation();


  return (


    <ScrollView vertical showsVerticalScrollIndicator={false}>

      <View style={styles.container}>
        <Text style={styles.text}>Materias</Text>
       


    <View>
    <Fundamentalensio 
      cover={require('../../assents/pt.png')}
      name="Lingua Portuguesa"
      description=""
      onPress={Pt}
      
      />


    <Fundamentalensio 
      cover={require('../../assents/matematica.png')}
      name="Matemática"
      description=""
      onPress={Mat}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/historia.png')}
      name="História"
      description=""
      onPress={Hist}
      
      />
    <Fundamentalensio 
      cover={require('../../assents/geografia.png')}
      name="Geografia"
      description=""
      onPress={Geo}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ciencias.png')}
      name="Ciências"
      description=""
      onPress={Cie}
      
      />
    
    <Fundamentalensio 
      cover={require('../../assents/artes.png')}
      name="Artes"
      description=""
      onPress={Art}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ingles.png')}
      name="Ingles"
      description=""
      onPress={Ing}
      
      />

    
    </View>
  
    </View>  
    </ScrollView>
  );

  function Pt(){
    Linking.openURL('https://classroom.google.com/c/NTI2MTE4NDUzODI5?cjc=hti726y')
  }
  function Mat(){
    Linking.openURL('https://classroom.google.com/c/NDg4NjMxMzk1MzAw?cjc=femgtqd')
  }
  function Hist(){
    Linking.openURL('https://classroom.google.com/c/NDg4NjMxNDYxMDM4?cjc=kw43bsq')
  }
  function Cie(){
    Linking.openURL('https://classroom.google.com/c/NTI2MTIwNzY1NDU1?cjc=ojca4sm')
  }
  function Art(){
    Linking.openURL('https://classroom.google.com/c/NDg4NjMzMzYyMDcy?cjc=yf3hli5')
  }
  function Ing(){
    Linking.openURL('https://classroom.google.com/c/NTI2MTIwODE2NzMz?cjc=hk7ce75')
  }
  function Geo(){
    Linking.openURL('https://classroom.google.com/c/NTI2MTIwNzk0ODg2?cjc=znh54ht')
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: 1901
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        padding: 30
    }
})