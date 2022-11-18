import React from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import CartSummary from '../../components/CartSummary/CartSummary';
import './Cart.css'

const Cart = () => {
    return (
        <div className='container mt-3'>
            <h3>Your Cart Product</h3>
            <hr />
            <div className="row">
            <div className="col-9">
                <CartProduct/>
            </div>
            <div className="col-3">
                <CartSummary/>
            </div>
            </div>
        </div>
    );
};

export default Cart;