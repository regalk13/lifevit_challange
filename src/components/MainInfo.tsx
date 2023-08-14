import React from 'react';
import {StyleSheet, Text, Button, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

const MainInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require('../iconos/ICONOS-09.png')}
          style={{width: 110, height: 110}}
        />
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 15,
            position: 'absolute',
            top: '85%',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            color: "#333",
          }}>
          Ivan Baez Logout
        </Text>
      </View>
      <View style={{flexDirection: 'column', flexWrap: 'wrap', marginTop: 5}}>
        <Text style={{color: '#2f4f6b', fontWeight: 'bold', fontSize: 18}}>
          Finalización
        </Text>
        <Text style={{lineHeight: 18, fontSize: 18, 

            color: "#333",
        }}>
          <Text style={{color: '#2f4f6b', fontWeight: 'bold', fontSize: 18}}>
            y envio
          </Text>{' '}
          de
        </Text>
        <Text style={{lineHeight: 18, fontSize: 18,
            color: "#333",
        }}>Información</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 35,
    margin: 15,
    marginTop: 5,
    alignItems: 'center',
  },
  container2: {
    display: 'flex',
    position: 'relative',
  },

  icons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});

export default MainInfo;
