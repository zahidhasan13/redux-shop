import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_PRODUCT } from "../constant";

const init_state = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
    shippingFee: 0,
}


const cartReducer = (state=init_state, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case ADD_TO_CART:
            const { product, quantity } = action.payload;
            const isExist = state.products.find(pd => pd.id === product.id);
            if(!isExist){
                const totPrice = state.totalPrice + product.price * quantity;
                const totQty = state.totalQuantity + quantity;
                const Shipping = state.shippingFee + Number(product.shipping);
                product.quantity = quantity;
                return{
                    ...state,
                    products: [...state.products, product],
                    totalPrice: totPrice,
                    totalQuantity: totQty,
                    shippingFee: Shipping,
                }
            }else{
                return state;
            }
        case INCREMENT:
            findPro = state.products.find(pd => pd.id === action.payload);
            index = state.products.findIndex(pd => pd.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return{
                ...state,
                totalPrice: state.totalPrice + findPro.price,
                totalQuantity: state.totalQuantity + 1,
            }
        case DECREMENT:
            findPro = state.products.find(pd => pd.id === action.payload);
            index = state.products.findIndex(pd => pd.id === action.payload);
            if(findPro.quantity > 1){
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return{
                    ...state,
                    totalPrice: state.totalPrice - findPro.price,
                    totalQuantity: state.totalQuantity - 1,
                }
            }else{
                return state;
            }
        case REMOVE_PRODUCT:
            findPro = state.products.find(pd => pd.id === action.payload);
            const filtered = state.products.filter(pd => pd.id !== action.payload);
            return{
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                totalQuantity: state.totalQuantity - findPro.quantity,
                shippingFee: state.shippingFee - findPro.shipping,
            }
        default:
            return state;
    }
}

export default cartReducer;