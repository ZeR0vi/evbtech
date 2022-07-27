import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Fundamentalensio from '../../components/ensinofundamental';

export default function AbrirEnsino() {

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
      onPress={() => navigation.navigate('Português Ensino Medio')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/redaçao.png')}
      name="Redação"
      description=""
      onPress={() => navigation.navigate('Redação Ensino Medio')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/matematica.png')}
      name="Matemática"
      description=""
      onPress={() => navigation.navigate('Matemática Ensino Medio')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/historia.png')}
      name="História"
      description=""
      onPress={() => navigation.navigate('Historia Ensino Medio')}
      
      />
    <Fundamentalensio 
      cover={require('../../assents/geografia.png')}
      name="Geografia"
      description=""
      onPress={() => navigation.navigate('Geografia Ensino Medio')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ciencias.png')}
      name="Biologia"
      description=""
      onPress={() => navigation.navigate('Biologia Ensino Medio')}
      
      />
    
    <Fundamentalensio 
      cover={require('../../assents/artes.png')}
      name="Artes"
      description=""
      onPress={() => navigation.navigate('Artes Ensino Medio')}
      
      />

    <Fundamentalensio 
      cover={require('../../assents/ingles.png')}
      name="Ingles"
      description=""
      onPress={() => navigation.navigate('Inglês Ensino Medio')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Ciências Sociais"
      description=""
      onPress={() => navigation.navigate('Ciências Sociais')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Filosofia"
      description=""
      onPress={() => navigation.navigate('Filosofia')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Matemática Para o Enem"
      description=""
      onPress={() => navigation.navigate('Matemática para o Enem')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Fisica"
      description=""
      onPress={() => navigation.navigate('Fisica')}
      
      />  
    
    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Projeto de Vida"
      description=""
      onPress={() => navigation.navigate('Projeto de Vida')}
      
      />
    
    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Ciências e suas Tecnologias"
      description=""
      onPress={() => navigation.navigate('Ciências e suas Tecnologias')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Química"
      description=""
      onPress={() => navigation.navigate('Química')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Mundo do Trabalho"
      description=""
      onPress={() => navigation.navigate('Mundo do Trabalho')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Sociologia"
      description=""
      onPress={() => navigation.navigate('Sociologia')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Tecnologias"
      description=""
      onPress={() => navigation.navigate('Tecnologias')}
      
      />

    <Fundamentalensio 
      //cover={require('../../assents/ingles.png')}
      name="Praticas Criativas"
      description=""
      onPress={() => navigation.navigate('Praticas Criativas')}
      
      />
    
    </View>
  
    </View>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
   //     height: 1901
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        padding: 30
    }
})