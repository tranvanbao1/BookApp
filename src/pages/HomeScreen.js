import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/home/Header';
import BackGround from '../components/home/BackGround';
import Featured from '../components/home/Featured';
import PodCast from '../components/home/Podcast';
import PodCast2 from '../components/home/Podcast2';
import SpecialOffer from '../components/home/SpecialOffers';
import Footer from '../components/home/Footer';
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <BackGround />
      <View>
        <View style={styles.name}>
          <Text style={styles.titleFeatured}>Featured</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Book')}>
            <Text style={styles.titleFeatured2}>View More ></Text>
          </TouchableOpacity>
        </View>
      </View>
      <Featured nav={navigation} route={navigation} />
      <View>
        <Text style={styles.titleFeatured}>Podcast</Text>
      </View>
      <PodCast nav={navigation} />
      <PodCast2 nav={navigation} />
      <View>
        <Text style={styles.titleFeatured}>Special Offer</Text>
      </View>
      <SpecialOffer />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
  },
  name: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleFeatured: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerFeatured: {
    marginRight: 10,
  },
  titleFeatured2: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    color: 'blue',
  },
  container: {
    backgroundColor: '#fff'
  },
});
export default HomeScreen;
