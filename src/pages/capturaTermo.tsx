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
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavBar from '../components/NavBar.tsx';
import ButtonAction from '../components/ButtonAction.tsx';
import MainInfo from '../components/MainInfo.tsx';
import DeviceInfo from '../components/deviceInfo.tsx';
import DeviceList from '../components/deviceList.tsx';
import PacienteInfo from '../components/pacienteInfo.tsx';

import Icon from 'react-native-vector-icons/FontAwesome6';

const seperatorStyles: viewStyle = {
  height: 1,
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />;

const CapturaInfo = props => {
  const customData = require('../Datasensores/temp.json');
  let temp = customData['data']['temperature'];

  const data = {
    temp: temp,
  };
  return (
    <View>
      <NavBar></NavBar>

      <MainInfo></MainInfo>

      <DeviceInfo></DeviceInfo>

      <Seperator />

      <PacienteInfo></PacienteInfo>

      <DeviceList
        main={require('../iconos/ICONOS-14.png')}
        name="TEMP"
        value={data.temp}
        bg="#dbecfa"></DeviceList>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Icon name="chevron-left" size={16} color="#2c5274" />
        <ButtonAction name="Capturar / Detener" color="#0586e1"></ButtonAction>
        <Icon name="chevron-right" size={16} color="#2c5274" />
      </View>
    </View>
  );
};

export default CapturaInfo;
