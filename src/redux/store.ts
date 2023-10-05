import { configureStore } from '@reduxjs/toolkit';
import { ordersReducer } from './slices/ordersSlice';
import { poductsReducer } from './slices/productsSlice';

const store = configureStore({
    reducer: {
        orders: ordersReducer,
        products: poductsReducer,
    },
});

export default store;
