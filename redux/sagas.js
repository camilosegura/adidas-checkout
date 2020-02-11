import {
  all, call, delay, fork, put, take, takeLatest,
} from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from './actions';
import { createBasket, getProducts, getProductsAvailability } from '../api';

function* loadDataSaga() {
  try {
    const data = yield getProducts();
    const items = data.items.slice(1, 4);
    const itemsAvailable = yield all(items.map((item) => call(getProductsAvailability, item.productId)));
    const basket = yield createBasket();

    yield put(loadDataSuccess([itemsAvailable, basket]));
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
