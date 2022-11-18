import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartSummary.css";

const CartSummary = () => {
    const {totalPrice, totalQuantity, shippingFee} = useSelector(state => state.cartProduct)
    return (
        <div className="order_summary">
            <h2>Order Summary</h2>
            <div className="subTotal">
                <p>Subtotal({totalQuantity} Item) :</p>
                <p>${totalPrice}</p>
            </div>
            <div className="shipping_fee">
                <p>Shipping Fee :</p>
                <p>${shippingFee}</p>
            </div>
            <hr />
            <div className="grand_total">
                <p>Total :</p>
                <p>${totalPrice+shippingFee}</p>
            </div>
            <Link to="/checkOut">
                <button className="checkout_btn">PROCEED TO CHECKOUT</button>
            </Link>
        </div>
    );
};

export default CartSummary;
