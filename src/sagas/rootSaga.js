import { all, fork } from 'redux-saga/effects';
import { watchGetProducts } from './productSaga';
export default function* rootSaga() {
  yield all([fork(watchGetProducts)]);
  // code after fork-effect
}
