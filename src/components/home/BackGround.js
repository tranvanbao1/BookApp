import React from 'react';
import {View, Image, Dimensions, Text, StyleSheet} from 'react-native';

const BackGround = () => {
  return (
    <View>
      <Image
        style={styles.background}
        source={require('../../images/bgHome.jpg')}
        sizeMode={'cover'}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.4, // sizeMode: 'cover',
  },
});
export default BackGround;
