import React from 'react';
import {View, Image, Dimensions, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BackGround = () => {
  return (
    <TouchableOpacity>
      <Text>hhh</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.4, // sizeMode: 'cover',
  },
});
export default BackGround;
