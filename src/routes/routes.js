import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, createNativeStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Horarioano1 from '../pages/horario1ano';
import Horarioano2 from '../horario2ano';
import Horarioano3 from '../horario3ano'
import HorarioEja from '../horarioeja'
import Notification from '../pages/notifications';
import Merenda from '../merenda.js'
import Quimica from '../pages/profile/quimica';
import Abrirfundamental from '../pages/configuracao/abrirfundamental';
import AbrirEnsino from '../pages/configuracao/abrirensinomedio'



import PtFundamental from '../pages/pt'
import RedacaoFund from '../pages/redacaofund'
import MatFundamental from '../pages/matfund'
import CieFundamental from '../pages/ciefund'
import GeoFundamental from '../pages/geofund'
import HistFundamental from '../pages/histfund'
import ArtFundamental from '../pages/artfund'
import IngFundamental from '../pages/ingfund'
import Sobre from './sobre'


import Home from '../pages/home/inde';
import Profile from '../pages/profile';
import Config from '../pages/configuracao';


import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#5e17eb'
    }}
    >
      <Tab.Screen name="Home" 
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({size, color}) => (
          <Feather name='home' size={25} color={color} />
    
        )
      }}
      
      />

      <Tab.Screen name="Notificações" 
      component={Notification}
     options={{
       headerShown: false,
       tabBarIcon: ({size, color}) => (
         <Feather name="bell" size={25} color={color} />
      )
    }}
      
      />

      <Tab.Screen
      name="Produtos"
      component={Profile}
      options={{
        headerShown: false,
        tabBarIcon: ({size, color}) => (
          <Feather name='shopping-cart' size={25} color={color} />
    
        )
      }}
      />

      <Tab.Screen
      name="Aulas"
      component={Config}
      options={{
        headerShown: false,
        
        tabBarIcon: ({size, color}) => (
          <Feather name='book' size={25} color={color} />
        )
      }}

      />
      
    </Tab.Navigator>
  )
}


export default function Routes(){
  return(

    <Stack.Navigator
    initialRouteName='Home'
    >
      <Tab.Screen
      name="Home"
      component={Tabs}
      options={{
        headerShown: false,
        
        tabBarIcon: ({size, color}) => (
          <Feather name='home' size={25} color="#5e17eb" />
        )
      }}

      />


      <Tab.Screen name="Horario Fundamental 1" component={Horarioano1}/>
      <Tab.Screen name="Horario Fundamental 2" component={Horarioano2}/>
      <Tab.Screen name="Horario Ensino Medio" component={Horarioano3}/>
      <Tab.Screen name="Horario EJA" component={HorarioEja}/>
      <Tab.Screen name="Merenda" component={Merenda}/>
      
      <Tab.Screen name="Fundamental 2" component={Abrirfundamental}/>

      <Tab.Screen name="Português Fundamental" component={PtFundamental}/>
      <Tab.Screen name="Redação Fundamental" component={RedacaoFund}/>
      <Tab.Screen name="Matemática Fundamental" component={MatFundamental}/>
      <Tab.Screen name="Ciências Fundamental" component={CieFundamental}/>
      <Tab.Screen name="Geografia Fundamental" component={GeoFundamental}/>
      <Tab.Screen name="Historia Fundamental" component={HistFundamental}/>
      <Tab.Screen name="Artes Fundamental" component={ArtFundamental}/>
      <Tab.Screen name="Inglês Fundamental" component={IngFundamental}/>

      <Tab.Screen name="Ensino Medio" component={AbrirEnsino}/>
      <Tab.Screen name="Química" component={Quimica}/>


      <Tab.Screen name="Sobre" component={Sobre}/>


  



    </Stack.Navigator>









  )
};

