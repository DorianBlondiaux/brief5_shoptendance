import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productsSlice";


const store = configureStore({
    reducer: {
        product: productReducer
    }
});

export default store;