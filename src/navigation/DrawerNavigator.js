import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  AboutStackNavigator,
  GenreStackNavigator,
  MainStackNavigator,
} from './StackNavigator';
import {Colors, IconButton} from 'react-native-paper';
import SearchButton from '../components/SearchButton';
import CustomDrawerContent from './CustomDrawerContent';

import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: Colors.deepPurple600},
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
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Genre"
        component={GenreStackNavigator}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};

const Wrapper = styled.View`
  flex-direction: row;
`;
