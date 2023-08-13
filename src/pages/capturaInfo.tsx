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

import NavBar from "../components/NavBar.tsx"
import MainInfo from "../components/MainInfo.tsx"
import ListItem from "../components/listItem.tsx"
import ButtonAction from "../components/ButtonAction.tsx"

import Icon from 'react-native-vector-icons/FontAwesome6';

const seperatorStyles: viewStyle = {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />

const CapturaInfo = () => {
    return (
        <View>
            <NavBar>
            </NavBar>

            <MainInfo>
            </MainInfo>

            <ListItem main={require( "./src/iconos/ICONOS-12.png")} name="Tensiometro">
            </ListItem>

            <Seperator />
            <ListItem main={require( "./src/iconos/ICONOS-13.png")} name="Termometro">
            </ListItem>
            
            <Seperator />
            <ListItem main={require( "./src/iconos/ICONOS-15.png")} name="Oximetro">
            </ListItem>
            
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: 60, marginTop: 20}}>
                <ButtonAction name="Enviar" color="#0586e1">
                </ButtonAction>
                <ButtonAction name="Atras" color="#acb0b3">
                </ButtonAction>
            </View>
       </View>
    );
};

export default CapturaInfo;
