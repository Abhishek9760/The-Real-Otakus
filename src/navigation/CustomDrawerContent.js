import React, {useContext} from 'react';

import SafeArea from '../components/utils/SafeArea';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Switch} from 'react-native-paper';
import {ThemeContext} from '../context/ThemeContext';

function CustomDrawerContent(props) {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const getBackground = i => {
    const index = props.navigation.getState().index;
    return {
      backgroundColor: index === i ? theme.drawer.ACTIVE_COLOR : 'transparent',
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
              <Icon name="home" size={25} color={theme.drawer.ICON_COLOR} />
              <DrawerItemLabel>Home</DrawerItemLabel>
            </DrawerItemView>
            <DrawerItemView
              style={getBackground(1)}
              onPress={() => props.navigation.navigate('Genre')}>
              <Icon name="grid" size={25} color={theme.drawer.ICON_COLOR} />
              <DrawerItemLabel>All Genre</DrawerItemLabel>
            </DrawerItemView>
            <DrawerItemView
              style={getBackground(2)}
              onPress={() => props.navigation.navigate('About')}>
              <Icon name="info" size={25} color={theme.drawer.ICON_COLOR} />
              <DrawerItemLabel>About</DrawerItemLabel>
            </DrawerItemView>
            <DrawerItemView>
              <DrawerItemLabel>Theme</DrawerItemLabel>
              <Switch
                color="#9145dd"
                active
                value={theme.mode === 'dark'}
                onValueChange={toggleTheme}
              />
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
  background-color: ${props => props.theme.PRIMARY_BG_COLOR};
`;

const DrawerItemLabel = styled.Text`
  font-family: 'Wabene';
  margin-left: 16px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
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
  /* background-color: rgba(255, 255, 255, 0.8); */
  padding-top: 10px;
`;

const DrawerImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 125px;
  align-self: center;
`;
