import {
  all, call, delay, fork, put, take, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, failure, loadDataSuccess } from './actions';

function available(url) {
  return axios.get(url).then((response) => response.data);
}

function createBasket(url, items) {
  console.log('createBasket', url, items, {
    product_id: items[0].id,
    quantity: 1,
    product_variation_sku: items[0].variation_list[0].sku,
    productId: items[0].variation_list[0].sku,
    size: items[0].variation_list[0].size,
    displaySize: items[0].variation_list[0].size,
    captchaResponse: '',
  });
  return axios({
    method: 'post',
    url,
    mode: 'no-cors',
  }).then((response) => console.log('response', response) || response).catch(e => console.log("error", e));
}

function* loadDataSaga() {
  try {
    const data = yield axios.get('http://www.adidas.com/api/search/tf/query?query=all').then((response) => response.data.itemList);
    const items = data.items.slice(1, 4);
    const itemsAvailable = yield all(items.map((item) => call(available, `https://www.adidas.com/api/products/${item.productId}/availability`)));
    const basket = yield all([call(createBasket, 'https://www.adidas.com/api/checkout/baskets', itemsAvailable)]);
    console.log("itemsAvailable", itemsAvailable, basket);
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
