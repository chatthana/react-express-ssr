import {combineReducers} from 'redux';
import features from './FeatureReducer';
import team from './TeamReducer';

export default combineReducers({
  features,
  team
});