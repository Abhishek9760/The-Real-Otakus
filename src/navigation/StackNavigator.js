import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AnimeScreen from '../screens/AnimeScreen';
import PlayerScreen from '../screens/PlayerScreen';
import AboutScreen from '../screens/AboutScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="anime" component={AnimeScreen} />
      <Stack.Screen name="player" component={PlayerScreen} />
      <Stack.Screen name="favourite" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="about"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="about" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, AboutStackNavigator};
