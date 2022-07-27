import { StatusBar } from 'expo-status-bar';
/*  <StatusBar style="auto" />*/ 
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'

import Fundamentalensio from '../../components/ensinofundamental';
import EnsinoMedio from '../../components/ensinomedio';
import Abrirfundamental from './abrirfundamental';
import Routes from '../../routes/routes';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Config() {

  const navigation = useNavigation();
  return (


    <View style={styles.container}>
      <Text style={styles.text}>Exercícios</Text>

      <Fundamentalensio style={styles.level}
      cover={require('../../assents/fundamental2.png')}
      name="Ensino Fundamental II"
      description="Clique para fazer exercícios da materia de sua escolha"
      onPress={() => navigation.navigate('Fundamental 2')}
      
      />

      <Fundamentalensio style={styles.level}
        cover={require('../../assents/ensinomedio.png')}
        name="Ensino Médio"
        description="Clique para fazer exercícios da materia de sua escolha"
        onPress={() => navigation.navigate('Ensino Medio')}
      />

      <Fundamentalensio style={styles.level}
        cover={require('../../assents/eja.png')}
        name="EJA"
        description="Clique para fazer exercícios da materia de sua escolha"
        onPress={() => navigation.navigate('EJA')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30
  },
  level:{
    justifyContent: 'center',
    alignContent: 'center'    
  },
  container:{
    backgroundColor: '#fff',
    height: 1001

  }
})