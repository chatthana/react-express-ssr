import axios from 'Axios';

export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const fetch_team_request = () => ({
  type: FETCH_TEAM_REQUEST
});
export const fetch_team_success = (payload) => ({
  type: FETCH_TEAM_SUCCESS,
  payload
});

// Async Action Creators
export const request_team_members = () => {
  return dispatcher => {
    dispatcher(fetch_team_request());
    axios.get('https://private-c0012b-chatthanajanethanakarn.apiary-mock.com/teams')
    .then(resp => {
      dispatcher(fetch_team_success(resp.data));
    });
  }
}