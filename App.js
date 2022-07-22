import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Onesignal  from 'react-native-onesignal';

import Routes from './src/routes/routes.js';





export default function App() {



  
  return (
  <NavigationContainer>
    <Routes/>
  </NavigationContainer>
  
  );
}

