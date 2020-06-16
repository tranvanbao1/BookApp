import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.ads}>
        <Text style={styles.textBan}>AD</Text>
        <Icon1 name="ban" style={styles.iconban} size={24} />
      </View>
      <View>
        <Text style={styles.title}>SachNoi.app</Text>
      </View>
      <View style={styles.search}>
        <Icon name="search1" size={25} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  iconban: {
    top: 0,
    left: 11,
    position: 'absolute',
  },
  textBan: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 3.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    marginRight: 15,
  },
});

export default Header;
