import sortOnOptions from '../util/sortOnOptions';
export default function productReducer(state = {}, action) {
  const { key, data, error } = action;
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        cart: data.cart,
        products: data.items,
        sectionInfo: { sectionTitle: data.section_title, sectionDescription: data.section_description }
      };
    case 'GET_PRODUCTS_FAILURE':
      return {
        ...state,
        error
      };
    case 'SORT_PRODUCTS':
      const newProducts = sortOnOptions(key, state.products);
      return { ...state, products: newProducts };
    default:
      return state;
  }
}
