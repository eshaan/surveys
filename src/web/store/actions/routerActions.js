import { push } from 'react-router-redux';

export function navigate(path) {
  return dispatch => {
    dispatch(push(path));
  };
}
