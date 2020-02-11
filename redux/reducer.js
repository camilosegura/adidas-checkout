import { actionTypes } from './actions';

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

export default function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ items: action.data },
      };
    default:
      return state;
  }
}