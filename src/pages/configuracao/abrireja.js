import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Fundamentalensio from '../../components/ensinofundamental';

export default function AbrirEja() {

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
      onPress={() => navigation.navigate('Português Fundamental')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/redaçao.png')}
      name="Redação"
      description=""
      onPress={() => navigation.navigate('Redação Fundamental')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/matematica.png')}
      name="Matemática"
      description=""
      onPress={() => navigation.navigate('Matemática Fundamental')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/historia.png')}
      name="História"
      description=""
      onPress={() => navigation.navigate('Historia Fundamental')}
      
      />
    <Fundamentalensio 
      cover={require('../../assents/geografia.png')}
      name="Geografia"
      description=""
      onPress={() => navigation.navigate('Geografia Fundamental')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ciencias.png')}
      name="Ciências"
      description=""
      onPress={() => navigation.navigate('Ciências Fundamental')}
      
      />
    
    <Fundamentalensio 
      cover={require('../../assents/artes.png')}
      name="Artes"
      description=""
      onPress={() => navigation.navigate('Artes Fundamental')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ingles.png')}
      name="Ingles"
      description=""
      onPress={() => navigation.navigate('Inglês Fundamental')}
      
      />

    
    </View>
  
    </View>  
    </ScrollView>
  );
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