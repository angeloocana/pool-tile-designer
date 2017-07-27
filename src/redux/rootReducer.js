import { combineReducers } from "redux";
import tiles from '../tiles/redux/reducer';
import i18n from '../i18n/redux/reducer';

const rootReducer = combineReducers({
  tiles,
  i18n
});

export default rootReducer;