import { StatusBar } from 'expo-status-bar';
/*  <StatusBar style="auto" />*/ 
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Fundamentalensio from '../../components/ensinofundamental';
import EnsinoMedio from '../../components/ensinomedio';
import Abrirfundamental from './abrirfundamental';
import Routes from '../../routes/routes';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Config() {

  const navigation = useNavigation();
  return (

  <ScrollView vertical showsVerticalScrollIndicator={false}>  
    <View style={styles.container}>
      <Text style={styles.text}>Exercícios</Text>


      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft:15, }}>
      <Fundamentalensio style={styles.level}
      cover={require('../../assents/fundamental2.png')}
      name="Ensino Fundamental II"
      description="Clique para fazer exercícios da materia de sua escolha"
      onPress={() => navigation.navigate('Fundamental 2')}
      
      />
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft:15, }}>
      <Fundamentalensio style={styles.level}
        cover={require('../../assents/ensinomedio.png')}
        name="Ensino Médio"
        description="Clique para fazer exercícios da materia de sua escolha"
        onPress={() => navigation.navigate('Ensino Medio')}
      />
      </ScrollView>


      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft:15, }}>
      <Fundamentalensio style={styles.level}
        cover={require('../../assents/eja.png')}
        name="EJA"
        description="Clique para fazer exercícios da materia de sua escolha"
        onPress={() => navigation.navigate('EJA')}
      />
      </ScrollView>
   
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40
  },
  level:{
    justifyContent: 'center',
    alignContent: 'center'   
  },
  container:{
    backgroundColor: '#fff'

  }
})