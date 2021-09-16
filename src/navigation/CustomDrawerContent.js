import React from 'react';

import SafeArea from '../components/utils/SafeArea';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Colors} from 'react-native-paper';

function CustomDrawerContent(props) {
  const getBackground = i => {
    const index = props.navigation.getState().index;
    return {
      backgroundColor: index === i ? Colors.deepPurple400 : 'rgba(0,0,0,.3)',
    };
  };
  return (
    <DrawerBackgroundImage>
      <SafeArea>
        <DrawerView>
          <DrawerImage
            resizeMode="cover"
            source={require('../../assets/images/logo.jpg')}
          />
          <DrawerContentScrollView {...props}>
            <DrawerItemView
              style={getBackground(0)}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="home" size={25} color="#fff" />
              <DrawerItemLabel>Home</DrawerItemLabel>
            </DrawerItemView>

            <DrawerItemView
              style={getBackground(1)}
              onPress={() => props.navigation.navigate('About')}>
              <Icon name="info" size={25} color="#fff" />
              <DrawerItemLabel>About</DrawerItemLabel>
            </DrawerItemView>
          </DrawerContentScrollView>
        </DrawerView>
      </SafeArea>
    </DrawerBackgroundImage>
  );
}

export default CustomDrawerContent;

const DrawerBackgroundImage = styled.ImageBackground.attrs({
  blurRadius: 10,
  resizeMode: 'cover',
  source: require('../../assets/images/drawer.jpg'),
})`
  flex: 1;
`;

const DrawerItemLabel = styled.Text`
  font-family: 'Stentiga';
  margin: 16px;
  color: #fff;
`;

const DrawerItemView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  margin: 5px 0;
`;

const DrawerView = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 10px;
`;

const DrawerImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 125px;
  align-self: center;
`;
