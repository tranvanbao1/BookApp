import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/pages/HomeScreen';
import SearchScreen from './src/pages/SearchScreen';
import AccountScreen from './src/pages/AccountScreen';
import Book from './src/components/home/Book';
import BookDetail from './src/pages/BookDetail';
import Detail from './src/pages/detail';
import PlayScreen from './src/pages/PlayScreen';
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Book" component={Book} />
      <HomeStack.Screen name="BookDetail" component={BookDetail} />
      <HomeStack.Screen name="PlayScreen" component={PlayScreen} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        showLabel: false,
      }}
      showLabel={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'md-search' : 'md-search';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
