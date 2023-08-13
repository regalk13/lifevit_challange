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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavBar from "./src/components/NavBar.tsx"
import MainInfo from "./src/components/MainInfo.tsx"
import ListItem from "./src/components/listItem.tsx"


const App = () => {
    return (
        <View>
            <NavBar>
            </NavBar>

            <MainInfo>
            </MainInfo>
            <ListItem main={require( "./src/iconos/ICONOS-12.png")} name="Tensiometro">
            </ListItem>

            <ListItem main={require( "./src/iconos/ICONOS-13.png")} name="Termometro">
            </ListItem>
            
            <ListItem main={require( "./src/iconos/ICONOS-15.png")} name="Oximetro">
            </ListItem>
        </View>
    );
};

export default App;
// export default NavBar;
