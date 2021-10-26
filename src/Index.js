import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {ThemeContext} from './context/ThemeContext';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {MainStackNavigator} from './navigation/StackNavigator';

const paperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#ffe600',
    accent: '#807300',
  },
};

const Index = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer
      theme={theme.mode === 'light' ? DefaultTheme : DarkTheme}>
      <ThemeProvider theme={theme}>
        <PaperProvider
          theme={theme.mode === 'light' ? PaperDefaultTheme : paperDarkTheme}>
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
