import { actionTypes } from './actions';
import { getTotalItems, getTotalPrice } from './utils';

export const defaultInitialState = {
  products: {},
  totalItems: 0,
  totalPrice: 0,
  error: false,
};

export default function reducer(state = defaultInitialState, action) {
  let products;
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
    case actionTypes.REMOVE_PRODUCT:
      products = { ...state.products };
      delete products[action.data];

      return {
        ...state,
        ...{ products },
        ...{ totalItems: getTotalItems(products) },
        ...{ totalPrice: getTotalPrice(products) },
      };
    case actionTypes.CHANGE_QUANTITY:
      products = { ...state.products };
      products[action.data.id].qty = action.data.qty;

      return {
        ...state,
        ...{ products },
        ...{ totalItems: getTotalItems(products) },
        ...{ totalPrice: getTotalPrice(products) },
      };
    default:
      return state;
  }
}
