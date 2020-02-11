export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function removeProduct(data) {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    data,
  };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function changeQuantity(data) {
  return {
    type: actionTypes.CHANGE_QUANTITY,
    data,
  };
}
