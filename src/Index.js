import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {MainStackNavigator} from './navigation/StackNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {getAndSetAppInfo} from './actions/appInfoAction';
import {updateNeeded} from './utils';

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
  const dispatch = useDispatch();
  const appInfo = useSelector(state => state.appInfo);

  useEffect(() => {
    dispatch(getAndSetAppInfo());
    if (!appInfo.isUpdated) {
      updateNeeded();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
