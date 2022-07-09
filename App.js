import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import Index from './src/Index';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import Loader from './src/components/utils/Loader';
const {store, persistor} = configureStore();

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};

export default App;
