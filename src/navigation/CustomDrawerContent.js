import React from 'react';

import SafeArea from '../components/utils/SafeArea';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Button, Divider, Switch} from 'react-native-paper';
import {Dimensions, Linking, StyleSheet} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {lightTheme, darkTheme} from '../Theme';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../actions/appThemeAction';
import OnlineStatus from './OnlineStatus';

const DRAWER_ITEMS = [
  {route: 'Home', label: 'Home', icon: 'home', outlineIcon: 'home-outline'},
  {
    route: 'Genre',
    label: 'All Genre',
    icon: 'grid',
    outlineIcon: 'grid-outline',
  },
  {
    route: 'About',
    label: 'About',
    icon: 'information-circle',
    outlineIcon: 'information-circle-outline',
  },
  {
    route: 'Chat',
    label: 'Chat',
    icon: 'chatbubbles',
    outlineIcon: 'chatbubbles-outline',
  },
];

function CustomDrawerContent(props) {
  const theme = useSelector(state => state.appTheme.theme);
  const dispatch = useDispatch();

  const progress = useDerivedValue(() => {
    return theme.mode === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const isFocused = i => {
    const index = props.navigation.getState().index;
    return index === i;
  };

  const rDrawerbgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [lightTheme.PRIMARY_BG_COLOR, darkTheme.PRIMARY_BG_COLOR],
    );
    return {backgroundColor};
  });

  return (
    <DrawerBackground style={[rDrawerbgStyle]}>
      <SafeArea>
        {theme.mode === 'light' ? (
          <DrawerImage
            resizeMode="cover"
            source={require('../../assets/images/logo-purple.jpg')}
          />
        ) : (
          <DrawerImage
            resizeMode="cover"
            source={require('../../assets/images/logo-yellow.jpg')}
          />
        )}
        <Divider style={styles.divider(theme.drawer.THEME_ICON_COLOR)} />
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.drawerContainer}>
          <DrawerSectionLabel>Welcome</DrawerSectionLabel>
          {DRAWER_ITEMS.map((item, index) => {
            return (
              <DrawerItem
                key={index}
                focused={isFocused(index)}
                activeBackgroundColor={theme.drawer.ACTIVE_COLOR}
                icon={({focused, color, size}) => (
                  <Icon
                    name={focused ? item.icon : item.outlineIcon}
                    size={size}
                    color={theme.drawer.ICON_COLOR}
                  />
                )}
                label={() => (
                  <DrawerItemWrapper>
                    <DrawerItemLabel>{item.label}</DrawerItemLabel>
                    {item.label === 'Chat' ? <OnlineStatus /> : null}
                  </DrawerItemWrapper>
                )}
                onPress={() => props.navigation.navigate(item.route)}
              />
            );
          })}

          <Divider />
          <DrawerSectionLabel>Choose Theme</DrawerSectionLabel>
          <DrawerItemView>
            <Icon
              name={theme.mode === 'light' ? 'sunny' : 'moon'}
              size={30}
              color={theme.drawer.THEME_ICON_COLOR}
            />
            <Switch
              thumbColor={theme.drawer.THEME_ICON_COLOR}
              trackColor={{
                false: '#ccc',
                true: theme.drawer.ACTIVE_COLOR,
              }}
              value={theme.mode === 'dark'}
              onValueChange={() => dispatch(toggleTheme())}
            />
          </DrawerItemView>
          <Divider />
          <DrawerDonateView>
            <Button
              icon="gift"
              color={theme.drawer.THEME_ICON_COLOR}
              mode="contained"
              onPress={() => Linking.openURL('https://paypal.me/therealotakus')}
              style={styles.donateButtonNoRad}
              contentStyle={styles.donateButtonContent}
              labelStyle={styles.donateButtonLabel}>
              Donate
            </Button>
          </DrawerDonateView>
        </DrawerContentScrollView>
      </SafeArea>
    </DrawerBackground>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  donateButtonLabel: {
    fontSize: 18,
  },
  donateButtonContent: {
    padding: 5,
  },
  donateButtonNoRad: {
    borderRadius: 0,
    elevation: 5,
  },
  drawerContainer: {
    flex: 1,
  },
  divider: bgColor => ({
    backgroundColor: bgColor,
    height: 3,
  }),
});

const DrawerBackground = styled(Animated.View)`
  flex: 1;
`;

const DrawerItemLabel = styled.Text`
  font-family: 'Wabene';
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const DrawerItemWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DrawerSectionLabel = styled.Text`
  font-family: 'Paladise Script';
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
  letter-spacing: 3px;
  margin: 0 0 5px 16px;
  padding-top: 5px;
  font-size: 20px;
`;

const DrawerItemView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px 0px 10px 20px;
  margin: 2px 0;
`;

const DrawerImage = styled.Image`
  width: auto;
  height: ${Dimensions.get('screen').height * 0.2}px;
`;

const DrawerDonateView = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 25px;
`;
