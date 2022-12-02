import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView, ReactButton, TouchableOpacity } from 'react-native-gesture-handler'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Button } from 'react-native-web';
import { Feather } from '@expo/vector-icons';

export default function Horarioano2() {




  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>  
      <View style={styles.horariosseparados}>
        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>6º Topazio </Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/topazio.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>6º Prata</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/prata.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>6º Safira</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/safira.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>7º Pérola</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/perola.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>7º Platina</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/platina.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>8º Pedra do Sol</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/pedradosol.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>8º Pedra da Lua</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/pedradalua.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>8º Diamante</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/diamante.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>9º Ametista</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/platina.png')}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>9º Água Marinha</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/platina.png')}/>
       
        <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 15}}>9º Onix</Text>
        <Image style={{width: '100%', height: 150}} source={require('./assents/platina.png')}/>
      </View>

      <View>
        <Text style={styles.download}>Quer ver o horário melhor?</Text>
        
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
      
    </KeyboardAvoidingView>


  );

  function Link(){
    Linking.openURL('https://i.ibb.co/TTTPrFP/horariofundamental2.jpg')
  }



}


/*https://i.ibb.co/TTTPrFP/horariofundamental2.jpg*/

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  horario:{
    width: '100%',
    height: 550
  },
  download:{
    fontWeight: 'bold',
  }

})