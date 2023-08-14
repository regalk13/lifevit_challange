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
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavBar from '../components/NavBar.tsx';
import MainInfo from '../components/MainInfo.tsx';
import ListItem from '../components/listItem.tsx';
import ButtonAction from '../components/ButtonAction.tsx';

import Icon from 'react-native-vector-icons/FontAwesome6';

import {SECRET} from '@env';
const seperatorStyles: viewStyle = {
  height: 1,
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />;

const EnvioInfo = props => {
  handlePress = () => {
    try {
      const pulsi = require('../Datasensores/pulsi.json');
      let oxy = pulsi['data']['blood_oxygen'];
      const tensio = require('../Datasensores/tensio.json');

      let sys = tensio['data']['high_pressure'];
      let dia = tensio['data']['low_pressure'];
      let pulso = tensio['data']['heart_rate'];
      let latitude = tensio['latitude'];
      let longitud = tensio['longitud'];

      const customData = require('../Datasensores/temp.json');
      let temp = customData['data']['temperature'];

      const raw = JSON.stringify({
        secret: SECRET,
        type: 'set',
        target: 'sensor',
        business_id: 1000,
        user_id: 5,
        patient_id: 11,
        device_id: 111,
        latitude: latitude,
        longitude: longitud,
        device_time: new Date().toISOString().slice(0, 19).replace('T', ' '), // '2021-05-04 12:00:00',
        data: {
          temperature: temp,
          high_pressure: sys,
          low_pressure: dia,
          heart_rate: pulso,
          blood_oxygen: oxy,
        },
      });

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: 'follow',
      };

      fetch('https://idco.com.co/sensors2/api.php', requestOptions)
        .then(response => response.text())
        .catch(error => console.log('API REQUEST', error));
      Alert.alert('Enviado', 'La información se ha enviado!');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'No fue enviado',
        'Un error evito que la información se enviara',
      );
    }
  };

  return (
    <View>
      <NavBar></NavBar>

      <MainInfo></MainInfo>

      <ListItem
        main={require('../iconos/ICONOS-12.png')}
        name="Tensiometro"
        page="Captura Tensiometro"></ListItem>

      <Seperator />
      <ListItem
        main={require('../iconos/ICONOS-14.png')}
        name="Termometro"
        page="Captura Termometro"></ListItem>

      <Seperator />
      <ListItem
        main={require('../iconos/ICONOS-16.png')}
        name="Oximetro"
        page="Captura Oximetro"></ListItem>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 60,
          marginTop: 20,
        }}>
        <ButtonAction
          name="Enviar"
          color="#0586e1"
          func={handlePress}></ButtonAction>
        <ButtonAction name="Atras" color="#acb0b3"></ButtonAction>
      </View>
    </View>
  );
};

export default EnvioInfo;
