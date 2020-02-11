import { actionTypes } from './actions';

export const defaultInitialState = {
  products: {},
  totalItems: 0,
  totalPrice: 0,
  error: false,
};

export default function reducer(state = defaultInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ ...action.data },
      };
    default:
      return state;
  }
}
