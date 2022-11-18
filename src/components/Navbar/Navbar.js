import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const {totalQuantity} = useSelector(state => state.cartProduct);
    return (
        <nav className="navbar">
            <div className="nav-top">
                <div className="container">
                    <Link to="/login" className="login">
                        SIGNUP/LOGIN
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="nav-main">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="search-bar">
                        <form>
                            <input
                                type="text"
                                className="search"
                                placeholder="search in Daraz"
                            />
                            <button type="submit" className="search-btn">
                                <Search className="search-icon" />
                            </button>
                        </form>
                    </div>
                    <div className="cart-icon">
                        <Link to="/cart">
                            <Badge badgeContent={totalQuantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
