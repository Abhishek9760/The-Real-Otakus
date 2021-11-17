import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AnimeScreen from '../screens/AnimeScreen';
import PlayerScreen from '../screens/PlayerScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import GenreAnimeListScreen from '../screens/GenreAnimeListScreen';
import {DrawerNavigator} from './DrawerNavigator';
import SearchScreen from '../screens/SearchScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {backgroundColor: theme.STATUS_BAR_BG_COLOR},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="anime"
        component={AnimeScreen}
        options={{
          headerTitle: 'Loading...',
          headerTitleStyle: {fontSize: 18},
        }}
      />
      <Stack.Screen
        name="player"
        component={PlayerScreen}
        options={{headerTitle: 'Choose Quality'}}
      />
      <Stack.Screen
        name="favourite"
        options={{title: 'Your Favourites'}}
        component={FavouritesScreen}
      />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen
        name="genreanimelist"
        component={GenreAnimeListScreen}
        options={{title: 'Loading...'}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
