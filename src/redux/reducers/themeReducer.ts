import { darkThemeColors, lightThemeColors } from '../../global/colors';
import { SET_THEME } from '../constants';

const INITIAL_STATE = {
  theme: 'light',
  colors: lightThemeColors,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
        colors: payload === 'dark' ? lightThemeColors : darkThemeColors,
      }

    default:
      return state;
  }
};

export default themeReducer;
