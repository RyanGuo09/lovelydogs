import { put, takeEvery } from 'redux-saga/effects';
import { getData } from '../api/httpClient';
import * as actionTypes from '../constant/actionTypes';
export function* watchGetProducts() {
  yield takeEvery('GET_PRODUCTS', getProducts);
}

function* getProducts() {
  try {
    const response = yield getData('https://pf-pets.azurewebsites.net/dog_toys');
    yield put({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      data: response.data
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_PRODUCTS_FAILURE,
      error
    });
  }
}
