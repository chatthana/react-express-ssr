import {createStore} from 'redux';
import rootReducer from '../state/reducers';

export default initialState => {
  return createStore(rootReducer, initialState);
}