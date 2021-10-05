import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AnimeScreen from '../screens/AnimeScreen';
import PlayerScreen from '../screens/PlayerScreen';
import AboutScreen from '../screens/AboutScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import {Colors} from 'react-native-paper';
import GenreScreen from '../screens/GenreScreen';
import GenreAnimeListScreen from '../screens/GenreAnimeListScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {backgroundColor: Colors.deepPurple400},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="anime"
        component={AnimeScreen}
        options={{headerTitle: 'Loading...'}}
      />
      <Stack.Screen
        name="player"
        component={PlayerScreen}
        options={{headerTitle: 'Choose Quality'}}
      />
      <Stack.Screen
        name="favourite"
        component={FavouritesScreen}
        options={{headerShown: false}}
      />
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

const GenreStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="genre">
      <Stack.Screen
        name="genre"
        component={GenreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="genreanimelist"
        component={GenreAnimeListScreen}
        options={{headerShown: true, title: 'Loading...'}}
      />
      <Stack.Screen
        name="anime"
        component={AnimeScreen}
        options={{headerTitle: 'Loading...'}}
      />
      <Stack.Screen
        name="player"
        component={PlayerScreen}
        options={{headerTitle: 'Choose Quality'}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, AboutStackNavigator, GenreStackNavigator};
