import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {animeListReducer} from '../reducers/animeListReducer';
import {animeDetailsReducer} from '../reducers/animeDetailsReducer';
import {selectedAnimeReducer} from '../reducers/selectedAnimeReducer';
import {animeGenreReducer} from '../reducers/animeGenreReducer';
import {animeGenreListReducer} from '../reducers/animeGenreListReducer';
import {playerReducer} from '../reducers/playerReducer';
import {searchReducer} from '../reducers/searchReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {favouritesReducer} from '../reducers/favouritesReducer';
import {appThemeReducer} from '../reducers/appThemeReducer';

const rootReducer = combineReducers({
  anime: animeListReducer,
  animeDetails: animeDetailsReducer,
  selectedAnime: selectedAnimeReducer,
  genre: animeGenreReducer,
  animeGenre: animeGenreListReducer,
  playerData: playerReducer,
  searchData: searchReducer,
  favouritesAnime: favouritesReducer,
  appTheme: appThemeReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favouritesAnime', 'appTheme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const configureStore = () => {
//   return createStore(rootReducer, applyMiddleware(thunk));
// };
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};

// export default configureStore;
