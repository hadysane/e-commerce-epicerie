import { actions } from "./actions";

// const initialState = {
//     items: []
// }

const saveToLocalstorage = object => {
    localStorage.setItem("items", JSON.stringify(object));
}

const initialState = {
    items:
        JSON.parse(localStorage.getItem("items")) != null
            ? JSON.parse(localStorage.getItem("items"))
            : [],
    total: 0
};

export default function onlineStoreApp(state = initialState, action) {
    switch (actions.type) {
        case actions.ADD_TO_CART:
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            })
        case actions.UPDATE_CART: 
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.id === action.payload.item.id ?
                        Object.assign({}, item, {
                            quantity: action.payload.quantity
                        })
                        : item; 
                })
            })
        case actions.REMOVE_FROM_CART: return Object.assign({}, state, {
            items: state.items.filter(item => {
                return item.id !== action.payload.id
            })
        })
        case SAVE_CART:
            saveToLocalstorage(action.payload.items);
            
            
        default:
            return state;
    }
}