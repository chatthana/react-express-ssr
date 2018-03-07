import {CREATE_FEATURE_SUCCESS} from '../actions/FeatureAction';

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_FEATURE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.feature)
      ]
    default:
      return state;
  }
}