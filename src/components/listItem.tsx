import React from 'react';
import {StyleSheet, Text, Button, View, Image, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import {useNavigation} from '@react-navigation/native';

type ListProps = {
  main: string;
  name: string;
};

const ListItem = (props: ListProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate(props.page)}>
          <Image source={props.main} style={{width: 100, height: 100}} />
        </Pressable>

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
          }}>
          {props.name}
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          source={require('../iconos/ICONOS-18.png')}
          style={{width: 70, height: 70}}
        />
        <Image
          source={require('../iconos/ICONOS-19.png')}
          style={{width: 70, height: 70}}
        />
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
    alignItems: 'center',
    paddingBottom: 10,
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

export default ListItem;
