import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../state/reducers';

export default initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // return createStore(rootReducer, initialState, applyMiddleware(thunk));
}