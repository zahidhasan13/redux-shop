import { SET_PRODUCTS } from "../constant"

export const setProducts = (products) => {
    return{
        type: SET_PRODUCTS,
        payload: products,
    }
}