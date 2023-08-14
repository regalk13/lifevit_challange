import React from 'react';
import {StyleSheet, Text, Button, View, Image, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

const DeviceInfo = props => {
  let dateActual = new Date();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../iconos/ICONOS-37.png')}
          style={{width: 70, height: 70}}
        />
        <Text style={{color: "#333"}}>70%</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../iconos/ICONOS-38.png')}
          style={{width: 70, height: 70}}
        />
        <Text style={{color: "#333"}}>
          {dateActual.getDate() +
            '/' +
            (dateActual.getMonth() + 1) +
            '/' +
            dateActual.getFullYear()}
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../iconos/ICONOS-39.png')}
          style={{width: 70, height: 70}}
        />
        <Text style={{color: "#333"}}>14:10</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#345982',
  },
});
export default DeviceInfo;
