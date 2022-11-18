import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, name, img, shipping, category, price, ratings } = product;
        return (
            <Link to={`/product/${id}`} key={id}>
                <div className="card">
                    <div className="card-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-content">
                        <h3>{name}</h3>
                        <div>
                            <Rating
                                name="size-small"
                                defaultValue={ratings}
                                size="small"
                                readOnly
                                sx={{
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                        <span style={{ color: "#F85606" }}>
                            Price: $ {price}
                        </span>
                        <p>Shipping: $ {shipping}</p>
                        <p>Category: {category}</p>
                    </div>
                </div>
            </Link>
        );
    });
    return <>{renderList}</>;
};

export default Product;
