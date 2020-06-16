import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import ReadMore from 'react-native-read-more-text';

class BookDetails extends React.Component {
  render() {
    const {route} = this.props;
    const {img, name, author, des} = route.params;

    return (
      <ScrollView style={styles.bg} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image style={styles.img} source={img} />
          <View style={styles.na}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
        <View style={styles.playContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.buttonPlay}>
              <Icon
                style={{marginLeft: 11, color: '#fff'}}
                size={20}
                name="control-play"
              />
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 5,
                  fontSize: 17,
                }}>
                Free Play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconShopping}>
                <Icon1 name="shoppingcart" size={20} style={styles.iconCart} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconShopping}>
                <Icon2
                  name="message-circle"
                  size={20}
                  style={styles.iconCart}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 10}}>
              <View style={styles.iconShopping}>
                <Icon1 name="hearto" size={20} style={styles.iconCart} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.des}>
            <Text style={styles.title}>Description</Text>
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}>
                  <Text style={styles.cardText}>{des}</Text>
                </ReadMore>
              </View>
            </View>
          </View>
        </View>
        
      </ScrollView>
    );
  }
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0080FF', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0080FF', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  };
}

export default BookDetails;
const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.3, // sizeMode: 'cover',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  na: {
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonPlay: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#70EDFF',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconShopping: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#fff',
  },
  iconCart: {
    marginTop: 4,
    marginRight: 1,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    width: '95%',
    alignSelf: 'center',
    paddingBottom: 20,
  },
});
