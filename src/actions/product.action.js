import axios from "axios";

const apiUrl = 'http://localhost:3000/products/';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT_LIKE = "ADD_PRODUCT_LIKE";

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(apiUrl).then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    return axios.post(apiUrl, data).then((res) => {
      dispatch({ type: ADD_PRODUCT, payload: data });
    });
  };
};

export const editProduct = (data) => {
  return (dispatch) => {
    return axios
      .put(apiUrl + data.id, data)
      .then((res) => {
        dispatch({ type: EDIT_PRODUCT, payload: data });
      });
  };
};

export const deleteProduct = (productId) => {
  return (dispatch) => {
    return axios.delete(apiUrl + productId).then((res) => {
      dispatch({ type: DELETE_PRODUCT, payload: productId });
    });
  };
};

export const addProductLike = (data) => {
  return (dispatch) => {
    return axios
      .put(apiUrl + data.id, data)
      .then((res) => {
        dispatch({ type: ADD_PRODUCT_LIKE, payload: data });
      });
  };
};
