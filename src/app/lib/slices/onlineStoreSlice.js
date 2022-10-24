import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:
        JSON.parse(localStorage.getItem("items")) != null
            ? JSON.parse(localStorage.getItem("items"))
            : []
};

const uid = () => Math.random().toString(34).slice(2)

const saveToLocalstorage = object => {
    localStorage.setItem("items", JSON.stringify(object));
}

export const onlineStoreSlice = createSlice({
    name: 'items', 
    initialState, 

    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, { id: uid(), ...action.payload }]
        },

        updateCart: (state, action) => {
            state.items = state.items.map(item => {
                return item.id === action.payload.item.id
                    ? Object.assign({}, item, {
                        quantity: action.payload.quantity
                    })
                    : item;
            })
            
        }, 

        removeToCart: (state, action) => {
            return Object.assign({}, state, {
                items: state.items.filter(item => {
                    return item.id !== action.payload.item.id;
                })
            });
           
        },

        saveCart: (state, action) => {
            saveToLocalstorage(action.payload.items);
            return Object.assign({}, state, { items: action.payload.items });
        }
    }
})

export const { addToCart, updateCart, removeToCart, saveCart } = onlineStoreSlice.actions

export default onlineStoreSlice.reducer

