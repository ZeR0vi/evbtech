import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


import Productone from '../../components/Productone';
import OutroOne from '../../components/OutroOne';
import ProductTwo from '../../components/ProductTwo';
import OutroTwo from '../../components/OutroTwo';



export default function Profile() {

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.titleheader}>Feira Do Empreendorismo</Text>
        <Text style={styles.subtitleheader}>Conheça os produtos dos alunos!</Text>
        <TouchableOpacity style={styles.insta}>
        <Feather name='instagram' size={25} color={'#fff'} />
        </TouchableOpacity>

      </View>
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View>
      
      <TouchableOpacity>  
        <LottieView
        source={require('../../assents/cart.json')}
       autoPlay={false}
       loop={false}
        resizeMode="cover"
       style={{width: 100, height: 100, paddingTop: 20}}
        />
      </TouchableOpacity>
      </View>

      <View>
      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ padding:15, }}>
        <Productone
        /*cover={require('../../assents/me')}*/
        name="Poema"
        description="Confira....."
        onPress={() => {}}
        />
        <OutroOne
        name="??"
        description="confira..."
        onPress={() => {}}
        
        />

      </ScrollView>
      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ padding:15, }}>
        <ProductTwo
        /*cover={require('../../assents/me')}*/
        name="??"
        description="Confira....."
        onPress={() => {}}
        />
        <OutroTwo
        /*cover={require('../../assents/me')}*/
        name="??"
        description="Confira....."
        onPress={() => {}}
        />
      </ScrollView>
      
      </View>

      <LottieView
      source={require('../../assents/schoolempreendorismo.json')}
      autoPlay={true}
      loop={true}
      resizeMode="cover"
      style={{width: 100, height: 255, paddingTop: 20}}
      />
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
  header:{
    backgroundColor: '#5e17eb',
    height: 200,
    padding: 5,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20
    
  },
  titleheader:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 45,
  },
  subtitleheader:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 5,
  },
  insta:{
    paddingStart: 350
  }
})