import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../../components/New';
import Merenda from '../../components/Merenda';
import About from '../../components/About'

const Stack = createStackNavigator();

function horario1anoo(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Horarioano1' component={horario1ano} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default function Home() {
  const navigation = useNavigation();

  return (

    <ScrollView vertical showsVerticalScrollIndicator={false}>

      <View style={styles.container}>


        <View style={styles.header}>




          <View style={styles.textheader}>
          <Text style={styles.textoheader}>Bem vindo Aluno(a)</Text>
          </View>

          <View>
          <Image style={styles.imageheader}  source={require('../../assents/logo.png')}/>
          </View>





        



        </View>



    
    


          <View style={styles.textmain}>
          <Text style={styles.textomain}>Acompanhe o Horario da sua turma</Text>
          </View>

          <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding:15, }}>

          <New
          cover={require('../../assents/relogio1.png')}
          name="Hórario Fundamental"
          description="Todos os hórarios do ensino fundamental 1"
          onPress={() => navigation.navigate('Horario Fundamental 1')}
          />



          <New
          cover={require('../../assents/relogio3.png')}
          name="Hórario Fundamental 2"
          description="Todos os do ensino fundamental 2"
          onPress={() => navigation.navigate('Horario Fundamental 2')}
          />

          <New
          cover={require('../../assents/relogio2.png')}
          name="Hórario Ensino Médio"
          description="Todos os hórarios do ensino medio"
          onPress={() => navigation.navigate('Horario Ensino Medio')}
          />

          <New
          cover={require('../../assents/relogio4.png')}
          name="Hórario EJA"
          description="Todos os hórarios do EJA"
          onPress={() => navigation.navigate('Horario EJA')}
          />

          
      

        </ScrollView>
        </View>

        <View style={styles.textomerenda}>
          <Text style={styles.merendatext}>Merenda Do Dia!</Text>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding:15, }}> 
          <Merenda
          cover={require('../../assents/merenda.png')}
          name="Merenda"
          description="Acompanhe a merenda do dia e veja oque tem de gostoso hoje na escola"
          onPress={() => navigation.navigate('Merenda')}
          />


          </ScrollView>
        </View>

        <View>
          <About
          cover={require('../../assents/merenda.png')}
          name="Sobre"
          description="Detalhes do E.V.B Tech"
          onPress={() => navigation.navigate('Sobre')}
          />
        </View>


        
      <View>
      <LottieView
      source={require('../../assents/bookanimation.json')}
      autoPlay={true}
      loop={true}
      resizeMode="cover"
      style={{width: 200, height: 200, paddingLeft: 100}}
  
      />
      </View>
      <View>
      <Text style={{textAlign:'center', fontSize: 30, fontWeight:'bold'}}>Pensando em algo para colocar aqui...</Text>
    </View>

      </View>    
      </ScrollView>


        
   
    

  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff'
    },
    perfil:{
      height: 50,
      width: 50,
 
    },
    textmain:{
      fontSize: 15,
      fontWeight: 'bold',

    },
    header:{
      height:200,
      backgroundColor: '#5e17eb',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    },
    textoheader:{
      color: '#fff',
      fontSize: 25,
      padding: 5,
      paddingTop: 75,
      fontWeight: 'bold',
      paddingLeft: 15
    },

    botaoheader:{
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',

      
    },
    perfil:{
      justifyContent: 'center',
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      paddingTop: 1,
      position: 'relative'
    },
  //  pesquisa:{
  //    backgroundColor: '#fff',
  //    width: '98%',
  //    elevation: 2,
  //    borderRadius:10,
  //    alignItems: 'center',
  //    flexDirection: 'row',
  //    paddingHorizontal: 20,
  //    height: 37
  //  },
    textomain:{
      fontWeight: 'bold',
      fontSize: 20
    },
    merendatext:{
      fontWeight: 'bold',
      fontSize: 20
    },
    imageheader:{
      width: 80,
      height: 80,
    }
    
  
});
