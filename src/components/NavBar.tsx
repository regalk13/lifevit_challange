import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';


import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icons_container}>
            <Pressable
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={16} color="#fff" />
            </Pressable>
            <Pressable
            onPress={() => navigation.toggleDrawer()}>

        <Icon name="bars" size={18} color="#fff" />
            </Pressable>
 

      </View>

      <View style={styles.title_container}>
        <Image source={require('../iconos/logo.png')} style={{width: 120, height: 120}} /> 
        
        <View style={{display: "flex"}}>
            <Text style={styles.text}>GESTIONA</Text>
            <Text style={{fontSize: 20,color: "#fff", lineHeight: 20}}>SALUD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#0b73c2',
    maxHeight: 190,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  icons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    paddingBottom: 0,
  },

  title_container: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 33,
    color: "#fff",  
  }
});


export default NavBar;
