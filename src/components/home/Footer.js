import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.sendFeedback}>
        <Image style={styles.picture} source={require('../../images/mb.jpg')} />
        <View style={styles.contentFeedBack}>
          <Text>Your feedback will make app better</Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>> Send Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.helpus}>
          <Icon name="like2" style={styles.iconLike} />
          <TouchableOpacity>
            <Text style={{marginLeft: 5, fontWeight: '650'}}>Help Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.version}>
        <Text>Version 1.0.1</Text>
      </View>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  sendFeedback: {
    width: '75%',
    borderWidth: 0.2,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: 4,
  },
  picture: {
    width: 70,
    height: 70,
  },
  contentFeedBack: {
    marginHorizontal: 5,
  },
  helpus: {
    flexDirection: 'row',
    height: 20,
    width: 100,
    marginVertical: 5,
    marginLeft: '8%',
  },
  container: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'gray',
    width: '75%',
  },
  version: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  iconLike: {
    marginTop: 1,
    fontSize: 15,
  }
});
