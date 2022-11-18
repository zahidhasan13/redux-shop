import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ADD_TO_CART, PRODUCT } from "../../services/constant";
import "./SingleProduct.css";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { product } = useSelector(
        (state) => state.allProducts
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: PRODUCT,
            id: id,
        });
    }, [id]);

    const decQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const addToCart = () => {
        dispatch({
            type: ADD_TO_CART,
            payload: { product, quantity}
        })
    }

    return (
        <div className="container">
            <div className="product-details">
                <div className="row">
                    <div className="col-6">
                        <div className="product-img">
                            <img src={product.img} alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <h1>{product.name}</h1>
                        <p>Category: {product.category}</p>
                        <h1 style={{ color: "#F85606" }}>${product.price}</h1>
                        <p>Shipping: ${product.shipping}</p>
                        <div className="prodQty">
                            <span>Quantity: </span>
                            <div className="prod_incdec">
                                <button className="minus" onClick={decQuantity}>
                                    <BsDash />
                                </button>
                                <span className="qty">{quantity}</span>
                                <button className="plus" onClick={() => setQuantity(quantity+1)}>
                                    <BsPlus />
                                </button>
                            </div>
                        </div>
                        <div className="prod-btn">
                        <Link to='/checkOut'>
                        <button className="buyNow">Buy Now</button>
                        </Link>
                        <button className="addCart" onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
