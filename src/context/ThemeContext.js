import React, {createContext, useState, useEffect} from 'react';
import {lightTheme, darkTheme} from '../Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    getTheme().then(data => {
      if (data.mode !== theme.mode) {
        setTheme(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const storeTheme = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@app_theme', jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getTheme = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@app_theme');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      setTheme(darkTheme);
      storeTheme(darkTheme);
    } else {
      setTheme(lightTheme);
      storeTheme(lightTheme);
    }
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme, storeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
