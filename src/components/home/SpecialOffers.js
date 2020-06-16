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
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
  {
    name: 'Tặng bom tấn Mắt Biếc khi mua gói Galaxy Play Mobile tháng chỉ 10K',
    imageUrl: require('../../images/so.jpg'),
  },
];

class SpecialOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      //   navigation: this.navigation.navigate,
    };
  }

  renderItem({item}) {
    return (
      <View>
        <Image style={styles.flat} source={item.imageUrl} />
        <Text style={styles.flat2}>{item.name}</Text>
      </View>
    );
  }

  render() {
    // const {navigation} = navigation.navigate;
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  flat: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.3,
    marginHorizontal: 5,
  },
  flat2: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.1,
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
export default SpecialOffer;
