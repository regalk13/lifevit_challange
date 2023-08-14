import React from 'react';
import {StyleSheet, Text, Button, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

const DeviceList = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.bg}]}>
      <View style={styles.container2}>
        <Image source={props.main} style={{width: 50, height: 50}} />
        <Text style={{color: '#7592d2'}}>{props.name}</Text>
      </View>

      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
    alignItems: 'center',
    marginBottom: 5,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DeviceList;
