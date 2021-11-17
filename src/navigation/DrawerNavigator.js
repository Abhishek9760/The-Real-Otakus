import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors, IconButton} from 'react-native-paper';
import SearchButton from '../components/SearchButton';
import CustomDrawerContent from './CustomDrawerContent';

import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GenreScreen from '../screens/GenreScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const theme = useSelector(state => state.appTheme.theme);
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: theme.drawer.BG_COLOR},
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
        component={HomeScreen}
        options={{
          headerTitle: 'The Real Otakus',
          headerRight: () => (
            <Wrapper>
              <SearchButton />
              <IconButton
                icon="heart"
                color="#fff"
                onPress={() => navigation.navigate('favourite')}
              />
            </Wrapper>
          ),
        }}
      />
      <Drawer.Screen name="Genre" component={GenreScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};

const Wrapper = styled.View`
  flex-direction: row;
`;
