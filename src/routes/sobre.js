import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import About from '../components/About';

export default function Sobre() {
  return (
    <View style={{backgroundColor: '#fff', height: 1001}}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 15, padding: 25}}>O aplicativo "EVB Digital" é um projeto da feira de empreendorismo feito de alunos para alunos.</Text>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Programador</Text>
      <About
      cover={require('../assents/kingofjs.jpg')}
      name="David Lorenzo"
      description="Aluno do 1ºJade - @_lorenzo_031"
      />
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Designer</Text>
      <About
      cover={require('../assents/pshumano.jpg')}
      name="Nicolas"
      description="Aluno do 2ºOuro - @nick.spam"
      />


    </View>
  );
}