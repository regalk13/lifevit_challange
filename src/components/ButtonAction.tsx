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


const ButtonAction = (props) =>{

    return (
    <Pressable style=
        {({pressed}) => [
          {
            backgroundColor: props.color,
          },
          styles.button,
        ]}>

        <Text style={styles.text}>{props.name}</Text>
    </Pressable>
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
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    color: "#fff",  
  },
  button: {
    padding: 5,
    minWidth: 100,
    borderRadius: 15,
  }
});
export default ButtonAction;

