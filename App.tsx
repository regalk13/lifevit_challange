/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import EnvioInfo from "./src/pages/envioInfo.tsx";
import CapturaInfo from "./src/pages/capturaInfo.tsx";


import Icon from 'react-native-vector-icons/FontAwesome6';

const seperatorStyles: viewStyle = {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />

const Drawer = createDrawerNavigator();
const App = () => {
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Envia Información" screenOptions={{drawerPosition:'right',headerShown:false }}>
        <Drawer.Screen  name="Envia Información" component={EnvioInfo} options={{ headerShown: false }}/>
        <Drawer.Screen  name="Captura Información" component={CapturaInfo} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
};

export default App;
