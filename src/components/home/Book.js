import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const data = [
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
  {
    imageUrl: require('../../images/dnt.jpg'),
  },
];

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  renderItem(item, navigation) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('BookDetail')}>
        <Image style={styles.flat} source={item.imageUrl} />
      </TouchableOpacity>
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => this.renderItem(item, navigation)}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    );
  }
}
export default Book;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  flat: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    marginTop: 15,
  },
});
