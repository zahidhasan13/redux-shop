import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../services/Actions/Action";
import Product from "../Product/Product";
import './Products.css'

const Products = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get(
                "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
            )
            .catch((err) => console.log(err));
            dispatch(setProducts(response.data))
    };
    useEffect(() => {
        fetchProducts();
    },[])
    return (
        <div className="all_products">
            <div className="container">
                <div className="product-heading">
                    <h3>Just for you</h3>
                </div>
                <div className="grid">
                <Product/>
                </div>
            </div>
        </div>
    );
};

export default Products;
