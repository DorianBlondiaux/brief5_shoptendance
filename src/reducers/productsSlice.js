import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = []
const apiUrl = 'http://localhost:3000/products/';

export const fetchProducts = createAsyncThunk('users/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  console.log(response.data);
  return response.data;
})

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
    isLoading: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  }
});

export const selectProducts = state => state.products.products;
export const selectLoadingState = state => state.products.isLoading;

export default productsSlice.reducer
