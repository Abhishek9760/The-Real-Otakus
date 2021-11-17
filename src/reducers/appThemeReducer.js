import {TOGGLE_THEME} from '../constants';
import {lightTheme, darkTheme} from '../Theme';

const initialState = {
  theme: lightTheme,
};

export const appThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      let theme = state.theme.mode === 'light' ? darkTheme : lightTheme;
      return {
        ...state,
        theme: theme,
      };
    default:
      return state;
  }
};
