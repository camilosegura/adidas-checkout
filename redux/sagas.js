import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from './actions';
import {
  getProducts, getProductAvailability, getProductInfo,
} from '../api';
import { formatProducts, getTotalItems, getTotalPrice } from './utils';

function* loadDataSaga() {
  try {
    const { data } = yield getProducts();
    const productsAvailable = yield all(data.map(({ productId }) => call(
      getProductAvailability, productId,
    )));
    const productsInfo = yield all(data.map(({ productId }) => call(getProductInfo, productId)));
    const products = formatProducts(productsInfo, productsAvailable);
    const totalItems = getTotalItems(products);
    const totalPrice = getTotalPrice(products);

    yield put(loadDataSuccess({ products, totalItems, totalPrice }));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ]);
}

export default rootSaga;
