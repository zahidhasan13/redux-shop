import { PRODUCT, SET_PRODUCTS } from "../constant";

const init_state = {
    products:[],
    product:{},
}

const productReducer = (state=init_state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case PRODUCT:
            return {
                ...state,
                product: state.products.find(product => product.id === action.id),
            };
    
        default:
            return state;
    }
}

export default productReducer;