import { configureStore } from '@reduxjs/toolkit'
import onlineStoreApp from './slices/onlineStoreSlice'
export const store = configureStore({
    reducer: {
        cart: onlineStoreApp, 
    }
})