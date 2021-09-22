import React from 'react';

import SafeArea from '../components/utils/SafeArea';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import {DrawerContentScrollView} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  const getBackground = i => {
    const index = props.navigation.getState().index;
    return {
      backgroundColor: index === i ? 'rgba(69, 39, 160, .5)' : 'rgba(0,0,0,.5)',
    };
  };

  return (
    <DrawerBackground>
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

          <AppLogo />
        </DrawerView>
      </SafeArea>
    </DrawerBackground>
  );
}

export default CustomDrawerContent;

const AppLogo = styled.Image.attrs({
  source: require('../../assets/images/app-logo.png'),
})`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  opacity: 0.5;
`;

const DrawerBackground = styled.View`
  flex: 1;
  background-color: #eee;
`;

const DrawerItemLabel = styled.Text`
  font-family: 'Wabene';
  margin-left: 16px;
  color: #fff;
  letter-spacing: 3px;
`;

const DrawerItemView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px 0px 10px 20px;
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
