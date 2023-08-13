
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';


const MainInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gestiona salud</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#0b73c2',
    minHeight: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  icons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  text: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",  
  }
});


export default MainInfo;
