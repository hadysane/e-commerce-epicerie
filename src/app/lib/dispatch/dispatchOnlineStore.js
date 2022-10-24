import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updateCart } from "../slices/onlineStoreSlice";

// const cart = useSelector((state) => state.cart.items)

const dispatch = useDispatch()

export const add = (qty, details) => {
    dispatch(addToCart({ quantity: qty, details: details }))
}

export const update = () => {
    // dispatch(addToCart({ quantity: qty, details: details }))
}