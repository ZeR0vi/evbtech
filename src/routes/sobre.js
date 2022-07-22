import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={{backgroundColor: '#fff', height: 1001}}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 15}}>O aplicativo "Vencesaula" é um projeto da feira de empreendorismo feito de alunos para alunos.</Text>
    
    <Text>Equipe: </Text>
    <Text>David Lorenzo 1º Jade - Coder</Text>
    <Text>Nicolas 2º - Designer</Text>     
    <Text>Alisson Kauan 1º Jade -</Text>   
    </View>
  );
}