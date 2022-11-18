import React from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, REMOVE_PRODUCT } from "../../services/constant";
import "./CartProduct.css";

const CartProduct = () => {
    const { products } = useSelector((state) => state.cartProduct);
    const dispatch = useDispatch();
    return (
        <>
            {products.length === 0 ? (
                "Your Cart is Empty"
            ) : (
                <>
                    {products.map((cartPro) => {
                        return (
                            <div className="row mt-3" key={cartPro.id}>
                                <div className="col-2">
                                    <div className="cart_img">
                                        <img src={cartPro.img} alt="" />
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="cart_name">
                                        <h1>{cartPro.name}</h1>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart_price">
                                        <h2 style={{color: '#F85606', marginBottom: '10px'}}>${cartPro.price}</h2>
                                        <p>shipping: {cartPro.shipping}</p>
                                        <div className="delete-btn">
                                            <button onClick={() => dispatch({type: REMOVE_PRODUCT, payload: cartPro.id})}>
                                                <MdDeleteForever />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="cart_quantity">
                                    <div className="prod_incdec">
                                <button className="minus" onClick={() => dispatch({type: DECREMENT, payload: cartPro.id})}>
                                    <BsDash />
                                </button>
                                <span className="qty">{cartPro.quantity}</span>
                                <button className="plus" onClick={() => dispatch({type: INCREMENT, payload: cartPro.id})}>
                                    <BsPlus />
                                </button>
                            </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default CartProduct;
