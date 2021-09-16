import React, {createContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {showToast} from '../utils';

export const ConnectionContext = createContext();

export const ConnectionContextProvider = ({children}) => {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    if (!connected) {
      showToast('Looks like you are offline or having a bad connection');
    }
  }, [connected]);

  const updateConnection = () => {
    NetInfo.fetch().then(state => {
      setConnected(state.isConnected);
    });
  };
  return (
    <ConnectionContext.Provider value={{connected, updateConnection}}>
      {children}
    </ConnectionContext.Provider>
  );
};
