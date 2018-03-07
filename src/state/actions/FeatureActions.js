export const FETCH_FEATURE_REQUEST = 'FETCH_FEATURE_REQUEST';
export const CREATE_FEATURE_REQUEST = 'CREATE_FEATURE_REQUEST';
export const CREATE_FEATURE_SUCCESS = 'CREATE_FEATURE_SUCCESS';

export const fetch_feature = () => {
  type: FETCH_FEATURE_REQUEST
}

export const create_feature = feature => {
  type: CREATE_FEATURE_REQUEST,
  feature
}