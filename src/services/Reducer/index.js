import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
    allProducts: productReducer,
    cartProduct: cartReducer,
})

export default reducer;