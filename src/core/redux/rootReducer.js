import { combineReducers } from 'redux';
import { tiles, colors, selectedColor } from '../../tiles/redux/reducers';
import { i18n } from '../../i18n/redux/reducers';

const rootReducer = combineReducers({
  colors,
  selectedColor,
  tiles,
  i18n
});

export default rootReducer;
