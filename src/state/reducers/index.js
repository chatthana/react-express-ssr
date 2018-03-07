import {combineReducers} from 'redux';
import features from './FeatureReducer';
import teams from './TeamReducer';

export default combineReducers({
  features,
  teams
});