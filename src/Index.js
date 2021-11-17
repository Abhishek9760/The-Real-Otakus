import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {MainStackNavigator} from './navigation/StackNavigator';
import {useSelector} from 'react-redux';

const paperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#ffe600',
    accent: '#807300',
  },
};

const paperDefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    accent: '#aa8fff',
    primary: '#522fbe',
  },
};

const Index = () => {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <NavigationContainer
      theme={theme.mode === 'light' ? DefaultTheme : DarkTheme}>
      <ThemeProvider theme={theme}>
        <PaperProvider
          theme={theme.mode === 'light' ? paperDefaultTheme : paperDarkTheme}>
          <StatusBar
            animated={true}
            backgroundColor={theme.STATUS_BAR_BG_COLOR}
            barStyle={theme.STATUS_BAR_COLOR}
            translucent
          />
          <MainStackNavigator />
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Index;
