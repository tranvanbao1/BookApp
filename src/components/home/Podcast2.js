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
    imageUrl: require('../../images/pc3.jpg'),
  },
  {
    imageUrl: require('../../images/pc3.jpg'),
  },
  {
    imageUrl: require('../../images/pc3.jpg'),
  },
  {
    imageUrl: require('../../images/pc3.jpg'),
  },
  {
    imageUrl: require('../../images/pc3.jpg'),
  },
  {
    imageUrl: require('../../images/pc3.jpg'),
  },
];

class Podcast2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  renderItem(item, navigation) {
    const {nav} = this.props;
    return (
      <TouchableOpacity onPress={() => nav.navigate('BookDetail')}>
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
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  flat: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.2,
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
export default Podcast2;
