import {
  ADD_PRODUCT,
  ADD_PRODUCT_LIKE,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
} from "../actions/product.action";

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [action.payload, ...state];
    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            content: action.payload.content,
          };
        } else return product;
      });
    case DELETE_PRODUCT:
      return state.filter((product) => product.id != action.payload);
    case ADD_PRODUCT_LIKE:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            likes: action.payload.likes,
          };
        } else return product;
      });
    default:
      return state;
  }
}
