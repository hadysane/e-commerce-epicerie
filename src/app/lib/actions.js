/**
 * ACTION TYPE
 */

export const actions = {
    GET_ITEMS: "GET_ITEMS",
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART: "UPDATE_CART", 
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    SAVE_CART: "SAVE_CART"
}


/**
 * ACTIONS CREATORS
 */

const uid = () => Math.random(34).slice(2)
export function addToCard(item, quantity) {
    return {
        type: actions.ADD_TO_CART, 
        payload : {id:uid(), quantity: quantity, details: item}
    }
}

export function updateCart(item, quantity) {
    return {
        type: actions.UPDATE_CART, 
        payload : {item : item, quantity}
    }
}

export function removeFromCart(item) {
    return {
        type: actions.REMOVE_FROM_CART, 
        payload: item
    }
}

export const saveCart = (items) => {
    return {
        type: actions.SAVE_CART,
        payload: { items: items }
    }
}