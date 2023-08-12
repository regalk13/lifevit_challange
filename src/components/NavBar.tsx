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

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gestiona tu salud</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b73c2',
    maxHeight: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  text: {
    color: "#fff",  
  }
});


export default NavBar;
