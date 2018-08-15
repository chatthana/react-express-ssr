import {FETCH_TEAM_REQUEST, FETCH_TEAM_SUCCESS} from '../actions/TeamActions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        members: action.payload
      };
    default:
      return state;
  }
}