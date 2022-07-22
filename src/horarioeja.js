import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView, ReactButton, TouchableOpacity } from 'react-native-gesture-handler'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Button } from 'react-native-web';
import { Feather } from '@expo/vector-icons';

export default function HorarioEja() {




  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>  
      <View style={styles.horariosseparados}>


       
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