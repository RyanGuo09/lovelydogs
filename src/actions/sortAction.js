import * as actionTypes from '../constant/actionTypes';

export function sortProducts(key) {
  return {
    type: actionTypes.SORT_PRODUCTS,
    key
  };
}
