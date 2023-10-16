import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: '',
    products: [],
    loading: false,
    error: ''
}

export const fetchProduct = createAsyncThunk('product/fetch', async () => {
    const response = await axios.get('http://localhost:3000/products/');
    //console.log(response.data);
    return response.data;
});

const productSlice =  createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action){
            const product = action.payload;
            const fetchedproducts = JSON.parse(localStorage.getItem('products')) || [];
            let exists = fetchedproducts.find(item => item === product);
            if(exists) {
                alert('product already saved!')
            }else{
                const updatedproducts = [...state.products, product];
                state.products = updatedproducts;
                localStorage.setItem('products', JSON.stringify(state.products));
                alert('product saved');
            }
        },
        fetchProducts(state, action){
            const fetchedproducts = JSON.parse(localStorage.getItem('products')) || [];
            state.products = fetchedproducts;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload.value;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.product = '';
            state.error = action.error.message;
        });
    }
});

export const { addproduct, fetchProducts } = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;