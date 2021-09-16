import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {AboutStackNavigator, MainStackNavigator} from './StackNavigator';
import {Colors} from 'react-native-paper';
import SearchButton from '../components/SearchButton';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="About"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: Colors.deepPurple600},
        headerRight: () => <SearchButton />,

        headerTitleStyle: {fontFamily: 'Stentiga'},
        drawerContentStyle: {backgroundColor: '#ffffff'},
        drawerLabelStyle: {
          color: Colors.purple900,
          fontFamily: 'Wabene',
        },
        drawerActiveTintColor: Colors.purple800,
      }}>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          headerTitle: 'The Real Otakus',
        }}
      />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
      <Drawer.Screen
        name="video"
        component={VideoPlayerScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};
