import React from 'react';
import {StyleSheet, Text, Button, View, Image, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

const PacienteInfo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../iconos/ICONOS-30.png')}
          style={{width: 90, height: 90}}
        />
      </View>
      <View style={{display: 'flex'}}>
        <Text style={styles.text}>Cristian</Text>
        <Text style={{color: '#333'}}>29 xxx/81kg/1,84 mts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: '#345982',
  },
});
export default PacienteInfo;
